let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; 
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });
};


document.querySelector("button").addEventListener("click", () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.querySelector("textarea").value;

    let selectedVoiceIndex = voiceSelect.value;
    if (voices.length > 0) {
        speech.voice = voices[selectedVoiceIndex]; 
    }

    window.speechSynthesis.speak(speech);
});
