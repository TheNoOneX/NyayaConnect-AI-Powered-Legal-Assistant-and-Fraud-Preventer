import os
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
from dotenv import load_dotenv
from PIL import Image
import io

import json
import re



# 1. Load Environment Variables
load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")

if not API_KEY:
    raise ValueError("❌ API Key missing! Please set GOOGLE_API_KEY in .env file.")

# 2. Configure Gemini AI (The Brain)
genai.configure(api_key=API_KEY)

# SYSTEM PROMPT: Based on your documentation [cite: 88, 89, 90]
# We instruct the AI to be an Indian Legal Expert and use BNS 2023.
SYSTEM_PROMPT = """
You are 'Nyaya-Sahayak', an AI Legal Assistant for India. 
Your goal is to help common citizens understand their rights.

RULES:
1. **Prioritize BNS 2023:** Always map crimes to the 'Bharatiya Nyaya Sanhita (BNS)' sections. If a user mentions IPC, politely correct them and provide the BNS equivalent.
2. **Be Empathetic:** The user might be stressed. Use calm, reassuring language.
3. **Simple Explanations:** Explain legal terms in simple English/Hindi.
4. **Actionable Advice:** Don't just quote laws; tell them what to do (e.g., "File a Zero FIR," "Send a notice").
5. **Safety:** Do not provide advice on evading the law or committing crimes.
6. **Always write a note in the end like this only for educational purpose !! Please consult a lawyer for furthur details.
"""

model = genai.GenerativeModel(
    model_name="gemini-2.5-flash", # Chosen for speed and vision capabilities [cite: 19, 87]
    system_instruction=SYSTEM_PROMPT
)

# 3. Initialize FastAPI App
app = FastAPI(title="Nyaya-Sahayak Backend")

# Allow the frontend (HTML file) to talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allows all origins (for development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "Online", "message": "Nyaya-Sahayak AI is ready."}

# --- ENDPOINT 1: TEXT/VOICE ANALYSIS ---
# Use this when the user speaks or types a problem.
@app.post("/api/analyze-text")
async def analyze_text(problem: str = Form(...), language: str = Form("English")):
    try:      
        prompt = f"""
            You are an Indian legal assistant.

            Analyze the user's issue and RETURN ONLY VALID JSON
            (do NOT add explanations outside JSON).

            Format:
            {{
            "summary": "Short and simple explanation",
            "red_flags": ["Point 1", "Point 2"],
            "laws": ["Law name with section"],
            "actions": ["Actionable step 1", "Actionable step 2"],
            "references": [
                {{
                "title": "Consumer Protection Act",
                "url": "https://consumeraffairs.nic.in"
                }}
            ],
            "disclaimer": "Educational purpose only. Consult a lawyer."
            }}

            User problem:
            \"{problem}\"

            Language: {language}
            """



        response = model.generate_content(prompt)
        data = extract_json(response.text)
        return data

    
    except Exception as e:
        print("❌ ERROR:", e)
        raise HTTPException(status_code=500, detail="Gemini processing failed")


# --- ENDPOINT 2: DOCUMENT SCANNING (OCR) ---
# Use this when the user uploads an image (Camera).
@app.post("/api/analyze-image")
async def analyze_image(file: UploadFile = File(...)):
    try:
        # 1. Read the image file
        image_data = await file.read()
        image = Image.open(io.BytesIO(image_data))

        # 2. Send Image + Prompt to Gemini (Multimodal) [cite: 18, 27]
        prompt = """
        Analyze this legal document image.
        1. Extract the key text (e.g., clauses, dates).
        2. Identify any "Red Flags" or unfair clauses (e.g., high penalties).
        3. If it's an insurance rejection, find the clause they used.
        4. Provide a summary of whether this is valid or invalid under Indian Law.
        5. If user uploads or writes any terms and conditions document , agreement. Carefully analyze it and find red flags which 
        prevents user's loss. Like the person not carrying documents while driving so the insurance is not cover, health insurances etc. 
        """
        
        response = model.generate_content([prompt, image])
        return {"result": response.text}

    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Failed to process image.")
    

def extract_json(text: str):
    match = re.search(r"\{[\s\S]*\}", text)
    if not match:
        raise ValueError("No JSON found in AI response")
    return json.loads(match.group())
