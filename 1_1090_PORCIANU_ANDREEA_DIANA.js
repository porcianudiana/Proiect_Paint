
const colorOption=document.querySelectorAll(".color-option");


const selectColor=(elem)=>{
	removeActiveColor();
	ctx.fillStyle=elem.getAttribute("data-color");
	elem.classList.add("checked");
}

const removeActiveColor=()=>{
	colorOption.forEach((circle)=>{
		circle.classList.remove("checked");
	});
}




var canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");

let x;
let y;

let pen_size=5;
let ok;



canvas.addEventListener("mousedown", (e)=>
{   
    
	x=e.offsetX;
	y=e.offsetY;
	ok=true;
	
	
})

canvas.addEventListener("mouseup",()=>{
	
	
	
	x=undefined;
	y=undefined;
	ok=false;
})

canvas.addEventListener('mousemove',(event)=>{
	deseneaza(event.offsetX,event.offsetY)
	
})

var MOUSE_LEFT=0;

canvas.onmousedown=function (e){
  if (e.button==MOUSE_LEFT)
	{ x1=e.pageX-this.getBoundingClientRect().left;
	  y1=e.pageY-this.getBoundingClientRect().top;
			  
			  
	}
}
	
	
ctx.fillStyle="black"
ctx.strokeStyle=ctx.fillStyle;

function deseneaza(x2,y2){
	var fillBox = document.getElementById("fillBox"),
        shape = document.querySelector('input[type="radio"][name="shape"]:checked').value;
    if (shape == "circle") {
		if(ok){
		var radius = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
		ctx.beginPath();
		ctx.arc(x2,y2,radius,0,Math.PI*2);
		ctx.closePath();
		ctx.fill();
		
		desen_cerc(x2,y2);
		}
		x=x2;
	    y=y2;
        
    }
	if (shape == "line") {
	if(ok){
		ctx.beginPath();
		ctx.arc(x2,y2,pen_size,0,Math.PI*2);
		ctx.closePath();
		ctx.fill();
		
		desen_linie(x,y,x2,y2);
		
	}
	x=x2;
	y=y2;
	}
	if (shape == "ellipse") {
	if(ok){
		

		desen_elipsa(x,y,x2,y2);
		
		
	}
	x=x2;
	y=y2;
	}
	
	
}

function desen_linie(x1,y1,x2,y2){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.strokeStyle=ctx.fillStyle;
	ctx.lineWidth=pen_size*2;
	ctx.stroke();
}

function desen_cerc(x1,y1,x2,y2) {
    var radius = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    ctx.beginPath();
    ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
	ctx.strokeStyle=ctx.fillStyle;
	ctx.lineWidth = 4;
	ctx.stroke();
}

function desen_elipsa(x1, y1, x2, y2) {

  ctx.beginPath();

  ctx.moveTo(x1, y1 - y2 / 2); // A1

  ctx.bezierCurveTo(
    x1 + x2 / 2,y1 -y2 / 2, // C1
    x1 + x2 / 2, y1 + y2 / 2, // C2
    x1, y1 + y2 / 2); // A2

  ctx.bezierCurveTo(
    x1 - x2 / 2, y1 + y2 / 2, // C3
    x1 - x2/ 2, y1 - y2 / 2, // C4
    x1, y1 - y2 / 2); // A1

  ctx.closePath();
  ctx.strokeStyle=ctx.fillStyle;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.stroke();
}
function onFill() {
    
    ctx.closePath();
    ctx.beginPath();
	ctx.strokeStyle=ctx.fillStyle;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	removeActiveColor();
	classList.add("checked");
}
 function Eraser(){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.strokeStyle="#ffffff";
	ctx.lineWidth=pen_size*2;
	ctx.stroke();
	
 }


function ChangeSize(new_pen_size){
	pen_size=new_pen_size;
}

document.getElementById("clear").addEventListener("click",function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
});

function downloadasPNG(){
        var download1 = document.getElementById("download");
        var image = document.getElementById("canvas").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);

    }
	
function downloadasJPEG(){
        var download2 = document.getElementById("download2");
        var image = document.getElementById("canvas").toDataURL("image/jpeg")
                    .replace("image/jpeg", "image/octet-stream");
        download2.setAttribute("href", image);

    }
	
function downloadasSVG(){
        var download3 = document.getElementById("download3");
        var image = document.getElementById("canvas").toDataURL("image/svg")
                    .replace("image/svg", "image/octet-stream");
        download3.setAttribute("href", image);
		
		
		
	

    }	
	

		