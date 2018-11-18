var canvas obj = {

  canvasWidth : "490px",
  canvasHeight : "220px",
  canvasDiv : $('canvasDiv'),
  context : canvas.getContext("2d");


  addClick = function(x,y,z){
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
  },

  redraw = function(){
  this.context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  this.context.strokeStyle = "#df4b26";
  this.context.lineJoin = "round";
  this.context.lineWidth = 5;

  for(var i=0; i < clickX.length; i++) {
      this.context.beginPath();
    if(clickDrag[i] && i){
      this.context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       this.context.moveTo(clickX[i]-1, clickY[i]);
     }
      this.context.lineTo(clickX[i], clickY[i]);
      this.context.closePath();
      this.context.stroke();
  };
  },





};


$('#clearCanvasSimple').mousedown(function(e)
  {
    clickX = new Array();
    clickY = new Array();
    clickDrag = new Array();
    redraw();
  });


$('#canvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

$('#canvas').mouseup(function(e){
  paint = false;
});

$('#canvas').mouseleave(function(e){
  paint = false;
});

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
