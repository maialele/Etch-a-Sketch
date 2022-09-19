const container = document.getElementById("container");
const slider = document.getElementById("volsetting");
const gridValue = document.getElementById("weight");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

function reset(rows, cols) {
  container.innerHTML = ""
}

makeRows(12, 12);