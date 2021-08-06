document.querySelector('#submitButton').addEventListener('click', promptMe);
document.querySelector('#clear').addEventListener('click', clearGrid);
// const container = document.getElementById('container');

function makeGrid (rows, cols) {
    const container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c=0; c < (rows * cols); c++) {
        let cell= document.createElement('div');
        cell.addEventListener('mouseover', hoverColor);
        cell.classList.add('grid-item');
        cell.style.padding = 0;
        container.appendChild(cell);
    };
};

let randomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function hoverColor($event) {
    const item = $event.target;
    item.style.backgroundColor = `${randomColor()}`;
};

function clearGrid() {
    const container = document.getElementById('container');
    let childDiv = container.getElementsByTagName('div')
    for (var i = 0; i < childDiv.length; i++) {
        childDiv[i].style.backgroundColor = 'whitesmoke';
    };
};

function cleanSlate() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
};

function promptMe() {
    var newSize = prompt('How many squares would you like?');
    cleanSlate();
    gridSize = newSize;
    makeGrid(gridSize, gridSize);
};
makeGrid(16, 16)