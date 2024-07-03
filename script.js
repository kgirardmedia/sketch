const gridContainer = document.getElementById("gridContainer")
let gridRows = 16;
let gridSize = gridRows * gridRows;

let gridDimensions = 800
function createGrid() {
    gridContainer.style.width = gridDimensions + "px";
    gridContainer.style.height = gridDimensions + "px";
    for (i = 0; i < gridSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.style.width = (gridDimensions/gridRows) + "px";
        gridElement.style.height = (gridDimensions/gridRows) + "px";
        console.log(gridElement.style.width)
        gridElement.classList.add("gridElement");
        gridElement.id = "box" + (i + 1);
        gridContainer.appendChild(gridElement);
    }
}

createGrid();

const gridBoxes = document.querySelectorAll(".gridElement")

gridBoxes.forEach((gridElement) => {
    gridElement.addEventListener("mouseover", () => {
        document.getElementById(gridElement.id).style.backgroundColor = "black";
        console.log(gridElement.id);
    });
});