const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll(".jsColors");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");
const clear = document.querySelector("#jsClear");

let painting = false;
function startPainting(){painting = true;}
function stopPainting(){painting = false;}

function onMouseMove(e){
  const x = e.offsetX;
  const y = e.offsetY;
  
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x,y);
  } else {
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}

ctx.strokeStyle = "black"

function changeColor(e){
  ctx.strokeStyle = e.target.style.backgroundColor;
  if(e.target.className==="controlsColors jsColors"){
    Array.from(colors).forEach(function(color){color.style.border="none";});
    e.target.style.border ="3px solid black";
  }
};

ctx.lineWidth = 2.5;
function handleRange(){ctx.lineWidth = range.value;};


function handleClear(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

let filling = false;

function fillColor(e){
  if(filling===true){
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }
}

function fillingMode(){
  filling = true;
  mode.textContent='painting';
}

function paintMode(){
  filling = false;
  mode.textContent='filling';
}

function handleMode(){
  if(filling===false){
    fillingMode();
  } else if(filling===true){
    paintMode();
  }
}

function init(){

  if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
  }

  if(range){
    range.addEventListener('input',handleRange);
  }
  
  clear.addEventListener('click',handleClear);
  mode.addEventListener('click',handleMode);
  Array.from(colors).forEach(function(){addEventListener('click',changeColor)});
  canvas.addEventListener('click',fillColor);
}

init();