const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');


let painting = false;

function onMouseMove(e){
  if(painting){
    const x = e.offsetX;
    const y = e.offsetY;
    console.log(x,y);
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