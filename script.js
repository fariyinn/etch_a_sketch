const containerGrid = document.getElementById('grid');

const DEFAULT_SIZE = 16;

document.getElementById('gridSizeButton').onclick = getGridSize;

function getGridSize() {
    let newGridSize = parseInt(prompt('how many rows and columns would you like for your grid?', '16'));

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

function changeColor(e) {
    e.target.style.backgroundColor = '#000';
};

// Add button to choose rainbow pen
// Function to change squares background color to random RGB value when hovered over


// Add button to choose gradient to black pen
// Function to change squares background color to 10% of black per hover, and with 10 hovers it should be fully black

createGrid(DEFAULT_SIZE);