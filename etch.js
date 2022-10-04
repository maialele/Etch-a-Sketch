const container = document.getElementById("container");
const colorPicker = document.getElementById("colorpicker");
const randomButton = document.getElementById("random");
const rainbowButton = document.getElementById("rainbow");
const clearButton = document.getElementById("clear");
const eraserButton = document.getElementById("eraser");
const allGridItems = document.getElementsByClassName("grid-item");
let currentRows = 0;
let currentCols = 0;


//variabel to define if mouse up or down
var isDown= false;

function makeSketchpad(rows, cols) {
  currentRows = rows;
  currentCols = cols;
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    document.onmousedown = function() {
      isDown = true;
    }
    document.onmouseup = function() {
      isDown = false;
    }
    cell.onmouseover = function() {
      if(isDown) {
        event.target.style.background = colorPicker.value;      
      }
    }
    randomButton.addEventListener('click', randomColor);
    rainbowButton.addEventListener('click', rainbowMode);
    eraserButton.addEventListener('click', eraserMode);
    clearButton.addEventListener('click', clearMode);
    container.appendChild(cell).className = "grid-item";
  };
}



function reset(rows, cols) {
  container.innerHTML = ""
}

//each grid-item will be in a different color
function rainbowMode() {
  
}

//changes grid-items back into white 
function eraserMode() {
  colorPicker.value = '#ffffff';
}

//clears the sketchpad 
function clearMode() {
  for (var i = 0; i < allGridItems.length; i++) {
    allGridItems[i].style.backgroundColor = 'white';
  }
}


function randomColor() {
  colorPicker.value = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
}


makeSketchpad(12, 12)
