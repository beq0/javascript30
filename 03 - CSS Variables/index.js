const parts = document.querySelectorAll('.controls input');

function update() {
    const newVal = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + newVal);
}

parts.forEach(part => part.addEventListener('change', update));
parts.forEach(part => part.addEventListener('mousemove', update));