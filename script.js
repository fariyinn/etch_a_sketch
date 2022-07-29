const containerGrid = document.getElementById('grid');

let rainbow;
let eraser;
let black;

const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000';
const DEFAULT_ERASER = '#FFF';

document.getElementById('rainbowButton').onclick = activateRainbow;
document.getElementById('eraser').onclick = activateEraser;
document.getElementById('black').onclick = activateBlack;

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

function activateRainbow() {
    eraser = false;
    black = false;
    rainbow = true;
};

function activateEraser() {
    rainbow = false;
    black = false;
    eraser = true;
};

function activateBlack() {
    rainbow = false;
    eraser = false;
    black = true;
};

function changeColor(e) {
    switch (true) {
        case (rainbow):
            e.target.style.backgroundColor = generateRandomColor();
            break;

        case(eraser):
            e.target.style.backgroundColor = DEFAULT_ERASER;
            break;  

        case(black):
        default:
            e.target.style.backgroundColor = DEFAULT_COLOR;
            break;
    };
};

function generateRandomColor() {
    return ('#' + Math.floor(Math.random()*(256 * 256 * 256)).toString(16).padStart(6,'0'));
};

// Add button to choose gradient to black pen
// Function to change squares background color to 10% of black per hover, and with 10 hovers it should be fully black

createGrid(DEFAULT_SIZE);