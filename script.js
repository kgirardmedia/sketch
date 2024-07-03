const gridContainer = document.getElementById("gridContainer")
let gridBoxes = document.querySelectorAll(".gridElement")
const buttons = document.querySelectorAll("button")
let gridRows = 0;
let gridSize = 0;
let gridDimensions = 800
setGridSize();


function setGridSize() {

    //User inputs grid size
    gridRows = prompt("Please enter the amount of pixels you would like per row.");
    if (gridRows > 75) {
        while (gridRows > 75) {
            gridRows = prompt("Pixel amount cannot exceed 75. Please enter a smaller number.");
        }
    }

    //grid elements and dimensions calculated
    gridSize = gridRows * gridRows
    gridContainer.style.width = gridDimensions + "px";
    gridContainer.style.height = gridDimensions + "px";

    //gridContainer propegated with gridElements
    for (i = 0; i < gridSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.style.width = (gridDimensions/gridRows) + "px";
        gridElement.style.height = (gridDimensions/gridRows) + "px";
        console.log(gridElement.style.width)
        gridElement.classList.add("gridElement");
        gridElement.id = "box" + (i + 1);
        gridContainer.appendChild(gridElement);
    }

    //all gridElements are selected and hover listeners are added
    gridBoxes = document.querySelectorAll(".gridElement")
    gridBoxes.forEach((gridElement) => {
        gridElement.addEventListener("mouseover", () => {
            document.getElementById(gridElement.id).style.backgroundColor = "black";
            document.getElementById(gridElement.id).style.borderStyle = "none";
        });
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id) {
            case 'resetButton':
                gridBoxes.forEach((gridElement) => {
                    document.getElementById(gridElement.id).style.backgroundColor = "white";
                    document.getElementById(gridElement.id).style.borderStyle = "solid";
                });
                break;    
            case 'resizeButton':
                for (i = 0; i < gridSize; i++) {
                    const gridElement = document.getElementById("box" + (i + 1));
                    gridContainer.removeChild(gridElement);
                }
                setGridSize();      
        }
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
