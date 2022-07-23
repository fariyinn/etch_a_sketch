const containerGrid = document.getElementById('grid');

let rows = 16;
let columns = rows;
let totalSquares = rows * columns;

containerGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
containerGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

function createGrid() {
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        containerGrid.appendChild(square);
    };
};

createGrid();

// Function with event listeners for hovering over grid squares


// Function to change squares background color when hovered over


// Add button that makes a pop up asking for number of squares per side for grid (max: 100)
// Removes existing grid
// Generate new grid in same space (max width: 960px)


// Add button to choose rainbow pen
// Function to change squares background color to random RGB value when hovered over


// Add button to choose gradient to black pen
// Function to change squares background color to 10% of black per hover, and with 10 hovers it should be fully black