function pressed(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(audio === null) return;
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');  
    audio.currentTime = 0;
    audio.play();
}

function transitionEnded(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', pressed);
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', transitionEnded));