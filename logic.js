//DOM Manipulation to transform the div with a class =grid to form grids 16x16
const gridDiv = document.querySelector(".grid");

function createGrid(rows, cols) {
    gridDiv.style.display = "grid";
    gridDiv.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    gridDiv.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    gridDiv.style.gap = "2px"; // Adjust spacing if needed

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.border = "1px solid black";
        cell.style.aspectRatio = "1"; // Makes squares
        cell.style.backgroundColor = "lightgray";
        gridDiv.appendChild(cell);
    } //to create divs to fill up the visual grid
}

createGrid(16, 16); //to invoke the grid function with the desired width & length


//Event to detect mouse click and change square to black color
// Select all cells after they are created
const cells = document.querySelectorAll(".cell");
console.log(cells.length);

// Loop through all cells and add event listeners
cells.forEach(cell => {
    cell.addEventListener("click", function () {
        cell.style.backgroundColor = "black"; // Change color on click
    });
});

// Append the cell to the grid container
gridDiv.appendChild(cell);

//Event to detect mouse click and revert square back to original color


//event to detect button click to reset all grid to default color