const GRID_WIDTH = 960;
const GRID_HEIGHT = 960;

function makeRows(rows, cols) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    const cellWidth = GRID_WIDTH / cols;
    const cellHeight = GRID_HEIGHT / rows;

    for (c = 0; c < rows * cols; c++) {
        let cell = document.createElement("div");
        // cell.innerText = c + 1;
        cell.style.height = cellHeight - 2 + "px";
        cell.style.width = cellWidth - 2 + "px";
        container.appendChild(cell).className = "grid-item";
    }

    setupColorHandler();
}

function setupColorHandler() {
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "purple";
        });
    });
}

function clearColor() {
    const clearButton = document.querySelector("#clear");
    const cells = document.querySelectorAll(".grid-item");

    clearButton.addEventListener("click", () => {
        cells.forEach((cell) => {
            cell.style.backgroundColor = "white";
        });
        changeGridSize();
    });
}

function changeGridSize() {
    makeRows(0, 0);
    const grid = Number(
        window.prompt("Please enter the grid size you want", "")
    );
    gridNum = parseInt(grid);
    if (grid > 100) {
        window.prompt("Please enter the grid size you want less than 100", "");
    } else if (grid != null) {
        makeRows(gridNum, gridNum);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    makeRows(16, 16);
    clearColor();
});
