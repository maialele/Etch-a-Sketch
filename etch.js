//constants imported from etch.html
const container = document.getElementById("container");
const colorPicker = document.getElementById("colorpicker");
const randomButton = document.getElementById("random");
const rainbowButton = document.getElementById("rainbow");
const discoButton = document.getElementById("disco");
const clearButton = document.getElementById("clear");
const eraserButton = document.getElementById("eraser");
const allGridItems = document.getElementsByClassName("grid-item");


//variabel to define if mouse up or down
var isDown= false;


//making of the sketchpad and making the buttons clickable.
function makeSketchpad(rows, cols) {

  //create grid Sketcpad
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    //inserts onmousedown into variable.
    document.onmousedown = function() {
      isDown = true;
    }

    document.onmouseup = function() {
      isDown = false;
    }

    //click at first and then continous mousedown will activate brush.
    cell.onmouseover = function() {
      if(isDown) {
        event.target.style.background = colorPicker.value
      }
    }  
    //a simple click would also work.
    cell.onclick = function() {
      event.target.style.background = colorPicker.value 
    }

    //rainbow mode - each grid-item will be in a different random color.
    rainbowButton.addEventListener('click', function() {
      cell.onmouseover = function() {
        if(isDown) {
          colorPicker.value = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
          cell.style.backgroundColor = colorPicker.value;
        }
      }
      //a simple click would also work.
      cell.onclick = () => {
        cell.style.background = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
      }
    });

    //brush options.
    //randomize a color to draw with
    randomButton.addEventListener('click', function() {
      colorPicker.value = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
      cell.onmouseover = function() {
        if(isDown) {
          cell.style.backgroundColor = colorPicker.value;
        }
      }
      //a simple click would also work.
      cell.onclick = () => {
        cell.style.background = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
      }
    });
    
    //changes grid-item to white
    eraserButton.addEventListener('click', function() {
      cell.onmouseover = function() {
        colorPicker.value = '#ffffff'
        if(isDown) {
          cell.style.backgroundColor = colorPicker.value;
        }
      }
      //a simple click would also work.
      cell.onclick = () => {
        cell.style.background = '#ffffff'
      }
    });

    //clears the sketchpad.
    clearButton.addEventListener('click', clearMode);

    container.appendChild(cell).className = "grid-item";
  };
}


//resets the grid every time there is a change of its size.
function reset(rows, cols) {
  container.innerHTML = ""
  colorPicker.value = "#000000"
}

//clears the sketchpad. changes all the grid-items to white. 
clearMode = () => {
  for (var i = 0; i < allGridItems.length; i++) {
    allGridItems[i].style.backgroundColor = '#ffffff';
  }
}


//default value of grid 
makeSketchpad(12, 12)

//this is a test for pull requests
