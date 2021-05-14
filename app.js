const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 2.5;
ctx.strokeStyle = "black";


let painting = false;

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

function startPainting(e){
  painting = true;
}

function stopPainting(){
  painting = false;
}


if(canvas){
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}