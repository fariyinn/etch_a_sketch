const containerGrid = document.getElementById('grid');

let rainbow;
let eraser;
let black;
let gradient;
let customColor;

let currentStroke = false;

const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'rgba(0,0,0,1)';
const DEFAULT_ERASER = 'rgba(0,0,0,0)';

document.getElementById('rainbowButton').onclick = activateRainbow;
document.getElementById('eraser').onclick = activateEraser;
document.getElementById('black').onclick = activateBlack;
document.getElementById('gradient').onclick = activateGradient;

let customColorPick = document.getElementById('customColor');
customColorPick.onclick = activateCustomColor;

let toggleGridButton = document.getElementById('toggleGrid');
toggleGridButton.onclick = toggleGrid;
let gridLines = false;

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

        containerGrid.addEventListener('click', createStroke);
        square.addEventListener('dblclick', toggleOpacity);
    };
};

function createStroke() {
    const blocks = document.querySelectorAll('.square');
    
    if (!currentStroke) {
        blocks.forEach((block) => {
            block.addEventListener('mouseleave', changeColor);
        });
        currentStroke = true;
    } else {
        blocks.forEach((block) => {
            block.removeEventListener('mouseleave', changeColor);
        });
        currentStroke = false;
    };
};

function removeCurrentColor() {
    eraser = false;
    rainbow = false;
    black = false;
    gradient = false;
    customColor = false;
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

function activateCustomColor() {
    removeCurrentColor();
    customColor = true;
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
            e.target.style.backgroundImage = 'linear-gradient(to top left,' + generateRandomColor() +
                                             ',' + generateRandomColor() + ',' + generateRandomColor() +
                                             ',' + generateRandomColor() + ')';
            break;

        case(customColor):
            e.target.style.backgroundColor = customColorPick.value;
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
    let a = Math.round(Math.random() * 10) / 10;
    
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
};

function toggleOpacity(e) {
    e.target.style.opacity = Number(e.target.style.opacity) + 0.1; 
};

function toggleGrid() {
    const blocks = document.querySelectorAll(".square");

    if(gridLines == false) {
        gridLines = true;

        blocks.forEach((block) => {
            block.style.border = '0.2px solid rgba(0,0,0,1)';
        });
    } else {
        gridLines = true;

        blocks.forEach((block) => {
            block.style.border = 'none';
        });
        
        gridLines = false; 
    };
};

createGrid(DEFAULT_SIZE);