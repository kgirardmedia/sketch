const gridContainer = document.getElementById("gridContainer")
let gridRows = prompt("Please enter the amount of pixels you would like per row.");
while (gridRows > 75) {
    gridRows = prompt("Pixel amount cannot exceed 75. Please enter a smaller number.");
}

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
const resetButton = document.querySelector(".resetButton")

gridBoxes.forEach((gridElement) => {
    gridElement.addEventListener("mouseover", () => {
        document.getElementById(gridElement.id).style.backgroundColor = "black";
        document.getElementById(gridElement.id).style.borderStyle = "none";
        console.log(gridElement.id);
    });
});

resetButton.addEventListener("click", () => {
    gridBoxes.forEach((gridElement) => {
        document.getElementById(gridElement.id).style.backgroundColor = "white";
        document.getElementById(gridElement.id).style.borderStyle = "solid";
        console.log("clicked");
    })
})