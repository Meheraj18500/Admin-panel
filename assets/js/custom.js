
const button = document.getElementById('menuBtn');
const rightArea = document.querySelector('.right-area')

button.addEventListener('click', function(){
    rightArea.classList.toggle("click");
})