const button = document.getElementById("btn");
const overlay = document.getElementById("overlay");

button.addEventListener('click', ()=> {
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
})








