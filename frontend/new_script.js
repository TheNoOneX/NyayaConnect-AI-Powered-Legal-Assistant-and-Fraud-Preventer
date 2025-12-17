/*************************
 * GLOBAL CONFIG
 *************************/
const API_BASE = "http://127.0.0.1:8000";

/*************************
 * LANGUAGE SELECTION
 * 
 * 
 * 
 * 
 * 
 *************************/
const translations = {
  English: {
    /* ===== INDEX / COMMON ===== */
    app_name: "Democratizing Justice for the New India",
    tagline: "Legal help made simple",
    select_language: "Select your language",
    continue: "Continue",

    /* ===== ACTION PAGE ===== */
    choose_help: "How can we help?",
    write_problem: "Write your problem",
    upload_document: "Upload document",
    speak_problem: "Speak your problem",

    /* ===== WRITE PAGE ===== */
    write_title: "✍️ Write Your Problem",
    write_placeholder: "Write your problem here...",
    write_example: "Example: My landlord is not returning my deposit",

    /* ===== UPLOAD PAGE ===== */
    upload_title: "📄 Upload Document",
    upload_text: "Take a photo or upload a document",

    /* ===== VOICE PAGE ===== */
    voice_title: "🎙️ Speak Your Problem",
    voice_hint: "Tap the mic and speak",
    what_we_heard: "What we heard:",

    /* ===== RESULT PAGE ===== */
    result_title: "📄 Your Legal Help",
    based_on_law: "Based on Indian law",
    summary: "Summary",
    what_wrong: "What is wrong",
    law_applied: "Law Applied",
    law_source: "Source: Government of India",
    next_steps: "What you should do",
    references: "References",

    /* ===== BUTTONS ===== */
    copy: "Copy",
    print: "Print"
  },

  Hindi: {
    app_name: "नए भारत के लिए न्याय को सरल बनाना",
    tagline: "कानूनी सहायता अब आसान",
    select_language: "भाषा चुनें",
    continue: "आगे बढ़ें",

    choose_help: "हम आपकी कैसे मदद कर सकते हैं?",
    write_problem: "अपनी समस्या लिखें",
    upload_document: "दस्तावेज़ अपलोड करें",
    speak_problem: "अपनी समस्या बोलें",

    write_title: "✍️ अपनी समस्या लिखें",
    write_placeholder: "यहाँ अपनी समस्या लिखें...",
    write_example: "उदाहरण: मेरा मकान मालिक मेरी जमा राशि वापस नहीं दे रहा है",

    upload_title: "📄 दस्तावेज़ अपलोड करें",
    upload_text: "फोटो लें या दस्तावेज़ अपलोड करें",

    voice_title: "🎙️ अपनी समस्या बोलें",
    voice_hint: "माइक दबाएँ और बोलें",
    what_we_heard: "हमने यह सुना:",

    result_title: "📄 आपकी कानूनी सहायता",
    based_on_law: "भारतीय कानून पर आधारित",
    summary: "सारांश",
    what_wrong: "क्या गलत है",
    law_applied: "लागू कानून",
    law_source: "स्रोत: भारत सरकार",
    next_steps: "अब आपको क्या करना चाहिए",
    references: "संदर्भ",

    copy: "कॉपी करें",
    print: "प्रिंट करें"
  },

  Marathi: {
    app_name: "नवीन भारतासाठी न्याय सुलभ करणे",
    tagline: "सोप्या पद्धतीने कायदेशीर मदत",
    select_language: "भाषा निवडा",
    continue: "पुढे जा",

    choose_help: "आम्ही तुम्हाला कशी मदत करू?",
    write_problem: "तुमची समस्या लिहा",
    upload_document: "दस्तऐवज अपलोड करा",
    speak_problem: "तुमची समस्या बोला",

    write_title: "✍️ तुमची समस्या लिहा",
    write_placeholder: "येथे तुमची समस्या लिहा...",
    write_example: "उदाहरण: घरमालक माझी ठेव परत देत नाही",

    upload_title: "📄 दस्तऐवज अपलोड करा",
    upload_text: "फोटो घ्या किंवा दस्तऐवज अपलोड करा",

    voice_title: "🎙️ तुमची समस्या बोला",
    voice_hint: "माइक दाबा आणि बोला",
    what_we_heard: "आम्ही ऐकले:",

    result_title: "📄 तुमची कायदेशीर मदत",
    based_on_law: "भारतीय कायद्यावर आधारित",
    summary: "सारांश",
    what_wrong: "काय चुकीचे आहे",
    law_applied: "लागू कायदा",
    law_source: "स्रोत: भारत सरकार",
    next_steps: "आता काय करावे",
    references: "संदर्भ",

    copy: "कॉपी करा",
    print: "प्रिंट करा"
  },

  Telugu: {
    app_name: "కొత్త భారతదేశానికి న్యాయాన్ని సులభతరం చేయడం",
    tagline: "చట్టపరమైన సహాయం సులభంగా",
    select_language: "మీ భాషను ఎంచుకోండి",
    continue: "కొనసాగించండి",

    choose_help: "మేము మీకు ఎలా సహాయం చేయగలము?",
    write_problem: "మీ సమస్యను వ్రాయండి",
    upload_document: "డాక్యుమెంట్ అప్‌లోడ్ చేయండి",
    speak_problem: "మీ సమస్యను మాట్లాడండి",

    write_title: "✍️ మీ సమస్యను వ్రాయండి",
    write_placeholder: "ఇక్కడ మీ సమస్యను వ్రాయండి...",
    write_example: "ఉదాహరణ: నా ఇంటి యజమాని డిపాజిట్ తిరిగి ఇవ్వడం లేదు",

    upload_title: "📄 డాక్యుమెంట్ అప్‌లోడ్ చేయండి",
    upload_text: "ఫోటో తీయండి లేదా డాక్యుమెంట్ అప్‌లోడ్ చేయండి",

    voice_title: "🎙️ మీ సమస్యను మాట్లాడండి",
    voice_hint: "మైక్ నొక్కి మాట్లాడండి",
    what_we_heard: "మేము విన్నది:",

    result_title: "📄 మీ చట్టపరమైన సహాయం",
    based_on_law: "భారతీయ చట్టాల ఆధారంగా",
    summary: "సారాంశం",
    what_wrong: "ఏం తప్పు జరిగింది",
    law_applied: "వర్తించే చట్టం",
    law_source: "మూలం: భారత ప్రభుత్వం",
    next_steps: "మీరు చేయాల్సినది",
    references: "సూచనలు",

    copy: "కాపీ చేయండి",
    print: "ప్రింట్ చేయండి"
  },

  Tamil: {
    app_name: "புதிய இந்தியாவிற்கான நீதியை எளிமைப்படுத்துதல்",
    tagline: "சட்ட உதவி எளிதாக",
    select_language: "உங்கள் மொழியை தேர்வு செய்யவும்",
    continue: "தொடரவும்",

    choose_help: "நாங்கள் உங்களுக்கு எப்படி உதவலாம்?",
    write_problem: "உங்கள் பிரச்சினையை எழுதுங்கள்",
    upload_document: "ஆவணத்தை பதிவேற்றவும்",
    speak_problem: "உங்கள் பிரச்சினையை பேசுங்கள்",

    write_title: "✍️ உங்கள் பிரச்சினையை எழுதுங்கள்",
    write_placeholder: "இங்கே உங்கள் பிரச்சினையை எழுதுங்கள்...",
    write_example: "உதாரணம்: என் வீட்டு உரிமையாளர் வைப்பு தொகையை திருப்பி தரவில்லை",

    upload_title: "📄 ஆவணத்தை பதிவேற்றவும்",
    upload_text: "புகைப்படம் எடுக்கவும் அல்லது ஆவணத்தை பதிவேற்றவும்",

    voice_title: "🎙️ உங்கள் பிரச்சினையை பேசுங்கள்",
    voice_hint: "மைக் அழுத்தி பேசுங்கள்",
    what_we_heard: "நாங்கள் கேட்டது:",

    result_title: "📄 உங்கள் சட்ட உதவி",
    based_on_law: "இந்திய சட்டத்தின் அடிப்படையில்",
    summary: "சுருக்கம்",
    what_wrong: "எது தவறு",
    law_applied: "பயன்படும் சட்டம்",
    law_source: "மூலம்: இந்திய அரசு",
    next_steps: "நீங்கள் செய்ய வேண்டியது",
    references: "ஆதாரங்கள்",

    copy: "நகலெடுக்க",
    print: "அச்சிடு"
  }
};



// LANGUAGE CHANGE FUNCTIONS


function applyLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dictionary[key]) {
      el.innerText = dictionary[key];
    }
  });
}


function onLanguageChange() {
  const lang = document.getElementById("language").value;
  localStorage.setItem("selectedLanguage", lang);
  applyLanguage(lang);
}


document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
  const key = el.getAttribute("data-i18n-placeholder");
  if (dictionary[key]) {
    el.placeholder = dictionary[key];
  }
});



function goNext() {
  const langSelect = document.getElementById("language");
  if (!langSelect) return;

  localStorage.setItem("selectedLanguage", langSelect.value);
  window.location.href = "action.html";
}

// document.addEventListener("DOMContentLoaded", () => {
//   const lang = localStorage.getItem("selectedLanguage");
//   const langText = document.getElementById("langText");
//   if (lang && langText) {
//     langText.innerText = "Language: " + lang;
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "English";

  // Apply language globally
  applyLanguage(savedLang);

  // Update dropdown if exists
  const langSelect = document.getElementById("language");
  if (langSelect) {
    langSelect.value = savedLang;
  }

  // Show language text if exists
  const langText = document.getElementById("langText");
  if (langText) {
    langText.innerText = "Language: " + savedLang;
  }
});

/*************************
 * LOADER (SAFE)
 *************************/
function showLoader(message = "Please wait...") {
  const loader = document.getElementById("loader");
  const text = document.getElementById("loaderText");

  if (!loader) return; // ✅ prevents crash

  if (text) text.innerText = message;
  loader.classList.remove("hidden");
}

function hideLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  loader.classList.add("hidden");
}

/*************************
 * TEXT INPUT
 *************************/
function saveProblem() {
  const input = document.getElementById("userProblem");
  if (!input) return;

  const text = input.value.trim();
  if (!text) {
    alert("Please write your problem");
    return;
  }

  const lang = localStorage.getItem("selectedLanguage") || "English";

  showLoader("Checking the law for you...");

  const formData = new FormData();
  formData.append("problem", text);
  formData.append("language", lang);

  fetch(`${API_BASE}/api/analyze-text`, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      hideLoader();
      localStorage.setItem("aiResult", JSON.stringify(data)); // ✅ FIX
      window.location.href = "result.html";
    })
    .catch(err => {
      hideLoader();
      alert("Something went wrong. Please try again.");
      console.error(err);
    });
}

/*************************
 * VOICE INPUT
 *************************/
let recognition = null;
let isRecording = false;
let finalTranscript = "";

document.addEventListener("DOMContentLoaded", () => {
  const micBtn = document.getElementById("micButton");
  if (!micBtn) return; // ✅ only on voice page

  const lang = localStorage.getItem("selectedLanguage") || "English";
  const langMap = {
    English: "en-IN",
    Hindi: "hi-IN",
    Marathi: "mr-IN",
    Tamil: "ta-IN"
  };

  if (!("webkitSpeechRecognition" in window)) {
    alert("Voice input not supported");
    return;
  }

  recognition = new webkitSpeechRecognition();
  recognition.lang = langMap[lang] || "en-IN";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onresult = (event) => {
    let interim = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const txt = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += txt;
      } else {
        interim += txt;
      }
    }

    const spoken = document.getElementById("spokenText");
    if (spoken) spoken.innerText = finalTranscript + interim;
  };

  recognition.onend = () => {
    isRecording = false;
    micBtn.classList.remove("recording");
    const status = document.getElementById("voiceStatus");
    if (status) status.innerText = "Recording stopped";
  };
});

function toggleRecording() {
  if (!recognition) return;

  const micBtn = document.getElementById("micButton");
  const status = document.getElementById("voiceStatus");

  if (!isRecording) {
    finalTranscript = "";
    recognition.start();
    isRecording = true;
    micBtn.classList.add("recording");
    if (status) status.innerText = "Listening...";
  } else {
    recognition.stop();
  }
}

function saveVoiceText() {
  if (!finalTranscript.trim()) {
    alert("Please speak your problem first");
    return;
  }

  const lang = localStorage.getItem("selectedLanguage") || "English";
  showLoader("Understanding your voice...");

  const formData = new FormData();
  formData.append("problem", finalTranscript);
  formData.append("language", lang);

  fetch(`${API_BASE}/api/analyze-text`, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      hideLoader();
      localStorage.setItem("aiResult", JSON.stringify(data));
      window.location.href = "result.html";
    })
    .catch(err => {
      hideLoader();
      alert("Voice processing failed");
      console.error(err);
    });
}

/*************************
 * DOCUMENT UPLOAD
 *************************/
function saveDocument() {
  const input = document.getElementById("documentFile");
  if (!input || !input.files.length) {
    alert("Please upload a document");
    return;
  }

  showLoader("Reading your document...");

  const formData = new FormData();
  formData.append("file", input.files[0]);

  fetch(`${API_BASE}/api/analyze-image`, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      hideLoader();
      localStorage.setItem("aiResult", JSON.stringify(data));
      window.location.href = "result.html";
    })
    .catch(err => {
      hideLoader();
      alert("Document analysis failed");
      console.error(err);
    });
}

/*************************
 * RESULT PAGE
 *************************/
document.addEventListener("DOMContentLoaded", () => {
  const summary = document.getElementById("summaryText");
  if (!summary) return; // ✅ only result page

  const raw = localStorage.getItem("aiResult");
  if (!raw || raw === "undefined") {
    summary.innerText = "No result found. Please try again.";
    return;
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    summary.innerText = "Error reading result.";
    return;
  }

  summary.innerText = data.summary || "No summary available";

  fillList("redFlags", data.red_flags);
  fillList("lawList", data.laws);
  fillList("nextSteps", data.actions);
  fillReferences("references", data.references);
});

function fillList(id, items = []) {
  const ul = document.getElementById(id);
  if (!ul || !Array.isArray(items)) return;

  ul.innerHTML = "";
  items.forEach(text => {
    const li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li);
  });
}

function fillReferences(id, refs = []) {
  const ul = document.getElementById(id);
  if (!ul || !Array.isArray(refs)) return;

  ul.innerHTML = "";
  refs.forEach(ref => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = ref.url;
    a.target = "_blank";
    a.innerText = ref.title;
    li.appendChild(a);
    ul.appendChild(li);
  });
}

function copyResult() {
  const summary = document.getElementById("summaryText");
  if (!summary) return;

  navigator.clipboard.writeText(summary.innerText);
  alert("Copied to clipboard");
}
