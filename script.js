let button = document.querySelector("button");
let divs = document.getElementsByClassName("new-div");

function createDiv() {
    let gridDiv = document.createElement("div");
    gridDiv.className = "new-div";
    //gridDiv.innerText = "Div";
    return gridDiv;
}
function destroyGrid() {
    while(divs.length > 0) {
        divs[0].remove();
    }
}
// function clearAndPrompt() {
//     return gridSize = parseInt(prompt("What yo size boi"));
// }
function clearGrid() {
    for(let i=0;i<divs.length;i++) {
        divs[i].style.backgroundColor = "";
    }
}
function createGrid() {
    
}
function createGrid() {
   // divArray.remove();
   if(divs.length > 0){
       destroyGrid();
    }
    let row = document.getElementById("container");
    let divArray = [];
    let gridSize = parseInt(prompt("What yo size boi"));
    document.getElementById("container").style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)"
    for(let i = 0; i < (gridSize * gridSize);i++) {
        // divArray.push(createDiv());
        // row.appendChild(divArray[i]);
        let test = createDiv();
        row.appendChild(test);
    }   
    keepHighlight();
}
function highlight(e) {
    e.target.style.backgroundColor = "yellow";
    console.log("sex");
}
// iterateDiv/creategrid();
function keepHighlight() {
    for(let i=0;i<divs.length;i++) {
        divs[i].addEventListener("mouseover", highlight);
    }
}