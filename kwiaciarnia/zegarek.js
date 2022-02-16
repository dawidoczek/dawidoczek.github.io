phi=1.6180339887


var zegarek = document.createElement('canvas');
zegarek.id="zegar";

obok=document.getElementById("banner")
zegarek.style="background-color:transparent";
obok.appendChild(zegarek);


var canvas = document.getElementById("zegar");
var ctx = canvas.getContext("2d");
var r = canvas.height / 2;
ctx.translate(r, r);
r = r * 0.90
start();


function start() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  podstawa(ctx, r);
  numery(ctx, r);
  czas(ctx, r);
  data=new Date();
  str=data.getHours()+":"+data.getMinutes()+":"+data.getSeconds();
  JSON.stringify(str); //tak ja tutaj zamieniłem str na str XD
  ctx.font = "30px Arial";
ctx.fillText(str, 145, 50);
}
function podstawa(ctx, r) {
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, 2 * Math.PI);
  ctx.fillStyle = 'pink';
  ctx.fill();

  
  ctx.lineWidth = r*0.03;
  ctx.stroke();

  
}
function rysuj(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.fillStyle="green"
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
  
}
function numery(ctx, r) {
  var ang;
  var num;
  ctx.fillStyle="red"
  ctx.font = r * 0.15 + "px Comic Sans MS";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for(num = 1; num < 13; num++){
  rand()
  
    ctx.fillStyle = 'hsl(' +360*Math.random()+','+ran1+'%'+','+ran1/phi+'%)';
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -r * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, r * 0.85);
    ctx.rotate(-ang);
  

  }
  ctx.fillStyle="black "

}
function czas(ctx, r){
  var now = new Date();
  var h = now.getHours();
  var min = now.getMinutes();
  var sek = now.getSeconds();

  h = h%12;
  h = (h*Math.PI/6)+(min*Math.PI/(6*60))+(sek*Math.PI/(360*60));
  ctx.strokeStyle='hsl('+360*Math.random()+','+"100%,"+"80%)";
  rysuj(ctx, h, r*0.5, r*0.07);
  ctx.strokeStyle='hsl('+360*Math.random()+','+"100%,"+"80%)";
  min = (min*Math.PI/30)+(sek*Math.PI/(30*60));
  rysuj(ctx, min, r*0.75, r*0.04);
  ctx.strokeStyle='hsl('+360*Math.random()+','+"100%,"+"80%)";
  sek = (sek*Math.PI/30);
  rysuj(ctx, sek, r*0.9, r*0.02);
  ctx.strokeStyle="black"
}

function rand(){
ran1=Math.floor(Math.random()*101)

}




setInterval(start, 100);



