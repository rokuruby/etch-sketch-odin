// logic.js

const gridContainer = document.querySelector('.grid');
const resetButton = document.getElementById('resetButton');

function createGrid(size) {
  gridContainer.innerHTML = ''; // Clear previous grid

  gridContainer.style.display = 'flex';
  gridContainer.style.flexWrap = 'wrap';
  gridContainer.style.width = '480px'; // Adjust as needed
  gridContainer.style.height = '480px'; // Adjust as needed

  const squareSize = 480 / size; // Calculate square size based on grid size

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.boxSizing = 'border-box'; // Include border in width/height
    square.style.border = '1px solid lightgray'; // Optional border

    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black'; // Change color on hover
    });

    gridContainer.appendChild(square);
  }
}

createGrid(16); // Initial 16x16 grid

resetButton.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (max 100):');
  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
    alert('Invalid size. Please enter a number between 1 and 100.');
    return;
  }

  createGrid(newSize);
});