function speak(text) {
    if (!text) return;
    const message = new SpeechSynthesisUtterance();
    message.lang = "ru-RU";
    message.text = text;
    window.speechSynthesis.speak(message);
}

const form = document.querySelector('.js-speaker');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    speak(form.querySelector('.js-speaker-input').value);
});