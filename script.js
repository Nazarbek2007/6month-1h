const board = document.querySelector('#board');

let squareNumber = 500;

function random(min, max) {
return Math.floor(Math.random() * (max - min) + min)
}

for (let i = 0; i < squareNumber; i++) {
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    
    const square = document.createElement('div')

    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        square.style.background = `rgb(${r},${g},${b})`;
    })    

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.appendChild(square)
}

function removeColor(element) { 
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
 }