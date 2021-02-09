const btn = document.querySelector('.talk');
const btn2 = document.querySelector('.stop');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function (){
    console.log('voice is activated, you can to microphone');
}

recognition.onresult = function (event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

btn.addEventListener('click', () => {
    recognition.start();
});

btn2.addEventListener('click', () => {
    recognition.stop();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;

    message = message.toLowerCase();
    console.log(message);

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}