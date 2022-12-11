const PROMPT_BUTTON = document.querySelector('button');
const SKETCH_PAD = document.querySelector('.sketch-pad');
let pixelDiv;
let userSelection;
let pixelGrid;

PROMPT_BUTTON.addEventListener('click', newSketchPad);

function newSketchPad() {
  userSelection = prompt('Combien de pixel de côté souhaitez-vous ? (maximum 100)', '32');
  if (userSelection <= 0) {
    createPad(1);
  } else if (userSelection > 100) {
    createPad(100);
  } else if (isNaN(userSelection)) {
    createPad(32);
  } else {
  createPad(+userSelection);
  }
}

function createPad(x) {
  if (pixelDiv === undefined) {
    for (let i=0; i < x*x; i++) {
      SKETCH_PAD.style.display = 'grid';
      SKETCH_PAD.style.gridTemplateColumns = `repeat(${x}, fit-content(100%))`; // create square sketch pad from user input
      pixelDiv = document.createElement('div');
      pixelDiv.classList.add('pixel');
      SKETCH_PAD.appendChild(pixelDiv);
    }
  } else {
    SKETCH_PAD.textContent = '';
    for (let i=0; i < x*x; i++) {
      SKETCH_PAD.style.gridTemplateColumns = `repeat(${x}, fit-content(100%))`;
      pixelDiv = document.createElement('div');
      pixelDiv.classList.add('pixel');
      SKETCH_PAD.appendChild(pixelDiv);
    }
  }
  pixelGrid = document.querySelectorAll('.pixel'); // create an array of all the 'pixels'
  for (let i=0; i<pixelGrid.length; i++) {
    pixelGrid[i].addEventListener('click', function() { // should attribute 'clicked' class to a pixel when clicked on, but is not working
    pixelGrid[i].className = 'clicked';
    }
    );
}
}