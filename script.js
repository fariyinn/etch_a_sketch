const containerGrid = document.getElementById('grid');

let rainbow;
let eraser;
let black;
let gradient;

const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000';
const DEFAULT_ERASER = '#FFF';

document.getElementById('rainbowButton').onclick = activateRainbow;
document.getElementById('eraser').onclick = activateEraser;
document.getElementById('black').onclick = activateBlack;
document.getElementById('gradient').onclick = activateGradient;

document.getElementById('gridSizeButton').onclick = getGridSize;

function getGridSize() {
    let newGridSize = parseInt(prompt('how many rows and columns would you like for your grid?', '16'));

    if (newGridSize > 100) {
        newGridSize = parseInt(prompt('Please enter a value below 100!', '16'));
    };

    clearGrid();
    createGrid(newGridSize);
};

function clearGrid() {
    while (containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.firstChild);
      };
};

function createGrid(size) {
    containerGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    containerGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        containerGrid.appendChild(square);

        square.addEventListener('mouseover', changeColor);
    };
};

function removeCurrentColor() {
    eraser = false;
    rainbow = false;
    black = false;
    gradient = false;
};

function activateRainbow() {
    removeCurrentColor();
    rainbow = true;
};

function activateEraser() {
    removeCurrentColor();
    eraser = true;
};

function activateBlack() {
    removeCurrentColor();
    black = true;
};

function activateGradient() {
    removeCurrentColor();
    gradient = true;
};

function changeColor(e) {
    switch (true) {
        case (rainbow):
            e.target.style.backgroundColor = generateRandomColor();
            break;

        case(eraser):
            e.target.style.backgroundColor = DEFAULT_ERASER;
            break;

        case(gradient):
            e.target.style.backgroundImage = 'linear-gradient(to top left,' + generateRandomColor() + ',' + generateRandomColor() + 
                                             ',' + generateRandomColor() + ',' + generateRandomColor() + ')';
            break;

        case(black):
        default:
            e.target.style.backgroundColor = DEFAULT_COLOR;
            break;
    };
};

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

// Add button to choose gradient to black pen
// Function to change squares background color to 10% of black per hover, and with 10 hovers it should be fully black

createGrid(DEFAULT_SIZE);