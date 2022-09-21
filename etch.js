const container = document.getElementById("container");
const slider = document.getElementById("volsetting");
const gridValue = document.getElementById("weight");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener("click", addColor);
    container.appendChild(cell).className = "grid-item";
  };
  
}

function addColor(event) {
  event.target.style.background = "red"
}


function reset(rows, cols) {
  container.innerHTML = ""
}


makeRows(12, 12);






      // var item = document.getElementsByClassName("grid-item");
      // for (let i = 0; i < item.length; i++) {
      //   item[i].addEventListener('click', function () {
      //     document.getElementsByClassName("grid-item").style.backgroundcolor = "red";
      //   });
    // }
