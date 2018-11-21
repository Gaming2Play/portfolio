const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


function dbFunction(){

  context.beginPath();
  context.fillStyle = "skyblue";
  context.moveTo(0,0);
  context.lineTo(0,350);
  context.lineTo(1000,350);
  context.lineTo(1000,0);
  context.lineWidth = 1;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "lightgreen";
  context.moveTo(0,0);
  context.rect(1,350,1000,250);
  context.lineWidth = 3;
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "red";
  context.moveTo(300,100);
  context.lineTo(200,300);
  context.lineTo(600,400);
  context.lineTo(700,200);
  context.lineWidth = 3;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.moveTo(200,300);
  context.fillStyle = "lightgrey";
  context.lineTo(200,500);
  context.lineTo(600,600);
  context.lineTo(600,400);
  context.lineWidth = 3;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.moveTo(600,400);
  context.fillStyle = "lightgrey";
  context.lineTo(600,600);
  context.lineTo(800,500);
  context.lineTo(800,300);
  context.lineWidth = 3;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "red";
  context.moveTo(700,200);
  context.lineTo(600,400);
  context.lineTo(800,300);
  context.lineWidth = 3;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "brown";
  context.moveTo(700,550);
  context.lineTo(700,450);
  context.lineTo(750,425);
  context.lineTo(750,525);
  context.lineWidth = 3;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "skyblue";
  context.moveTo(300,360);
  context.lineTo(500,410);
  context.lineTo(500,510);
  context.lineTo(300,460);
  context.lineWidth = 1;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.moveTo(400,385);
  context.lineTo(400,485);
  context.lineWidth = 0.1;
  context.closePath();
  context.stroke();

  /* schoorsteen */
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.fillStyle = "brown";
  context.moveTo(300,200);
  context.lineTo(300,120);
  context.lineTo(350,130);
  context.lineTo(350,210);
  context.closePath();
  context.stroke();
  context.fill();

  /* schoorsteen 2 */
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.fillStyle = "brown";
  context.moveTo(350,130);
  context.lineTo(350,210);
  context.lineTo(380,180);
  context.lineTo(379,125);
  context.closePath();
  context.stroke();
  context.fill();

  /* schoorsteen 3 */
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.fillStyle = "black";
  context.moveTo(305,120);
  context.lineTo(348,130);
  context.lineTo(377,125);
  context.lineTo(340,115);
  context.closePath();
  context.stroke();
  context.fill();


}

function clickFunction(){
  context.beginPath();
  context.fillStyle = "darkblue";
  context.moveTo(0,0);
  context.lineTo(0,350);
  context.lineTo(1000,350);
  context.lineTo(1000,0);
  context.lineWidth = 1;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "lightgreen";
  context.moveTo(0,0);
  context.rect(1,350,1000,250);
  context.lineWidth = 3;
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "red";
  context.moveTo(300,100);
  context.lineTo(200,300);
  context.lineTo(600,400);
  context.lineTo(700,200);
  context.lineWidth = 3;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.moveTo(200,300);
  context.fillStyle = "lightgrey";
  context.lineTo(200,500);
  context.lineTo(600,600);
  context.lineTo(600,400);
  context.lineWidth = 3;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.moveTo(600,400);
  context.fillStyle = "lightgrey";
  context.lineTo(600,600);
  context.lineTo(800,500);
  context.lineTo(800,300);
  context.lineWidth = 3;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "red";
  context.moveTo(700,200);
  context.lineTo(600,400);
  context.lineTo(800,300);
  context.lineWidth = 3;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "brown";
  context.moveTo(700,550);
  context.lineTo(700,450);
  context.lineTo(750,425);
  context.lineTo(750,525);
  context.lineWidth = 3;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "Yellow";
  context.moveTo(300,360);
  context.lineTo(500,410);
  context.lineTo(500,510);
  context.lineTo(300,460);
  context.lineWidth = 1;
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.moveTo(400,385);
  context.lineTo(400,485);
  context.lineWidth = 0.1;
  context.closePath();
  context.stroke();

  /* schoorsteen */
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.fillStyle = "brown";
  context.moveTo(300,200);
  context.lineTo(300,120);
  context.lineTo(350,130);
  context.lineTo(350,210);
  context.closePath();
  context.stroke();
  context.fill();

  /* schoorsteen 2 */
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.fillStyle = "brown";
  context.moveTo(350,130);
  context.lineTo(350,210);
  context.lineTo(380,180);
  context.lineTo(379,125);
  context.closePath();
  context.stroke();
  context.fill();

  /* schoorsteen 3 */
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.fillStyle = "black";
  context.moveTo(305,120);
  context.lineTo(348,130);
  context.lineTo(377,125);
  context.lineTo(340,115);
  context.closePath();
  context.stroke();
  context.fill();
}

context.beginPath();
context.fillStyle = "skyblue";
context.moveTo(0,0);
context.lineTo(0,350);
context.lineTo(1000,350);
context.lineTo(1000,0);
context.lineWidth = 1;
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "lightgreen";
context.moveTo(0,0);
context.rect(1,350,1000,250);
context.lineWidth = 3;
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "red";
context.moveTo(300,100);
context.lineTo(200,300);
context.lineTo(600,400);
context.lineTo(700,200);
context.lineWidth = 3;
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(200,300);
context.fillStyle = "lightgrey";
context.lineTo(200,500);
context.lineTo(600,600);
context.lineTo(600,400);
context.lineWidth = 3;
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(600,400);
context.fillStyle = "lightgrey";
context.lineTo(600,600);
context.lineTo(800,500);
context.lineTo(800,300);
context.lineWidth = 3;
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "red";
context.moveTo(700,200);
context.lineTo(600,400);
context.lineTo(800,300);
context.lineWidth = 3;
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "brown";
context.moveTo(700,550);
context.lineTo(700,450);
context.lineTo(750,425);
context.lineTo(750,525);
context.lineWidth = 3;
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "skyblue";
context.moveTo(300,360);
context.lineTo(500,410);
context.lineTo(500,510);
context.lineTo(300,460);
context.lineWidth = 1;
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(400,385);
context.lineTo(400,485);
context.lineWidth = 0.1;
context.closePath();
context.stroke();

/* schoorsteen */
context.beginPath();
context.lineWidth = 2;
context.strokeStyle = "black";
context.fillStyle = "brown";
context.moveTo(300,200);
context.lineTo(300,120);
context.lineTo(350,130);
context.lineTo(350,210);
context.closePath();
context.stroke();
context.fill();

/* schoorsteen 2 */
context.beginPath();
context.lineWidth = 2;
context.strokeStyle = "black";
context.fillStyle = "brown";
context.moveTo(350,130);
context.lineTo(350,210);
context.lineTo(380,180);
context.lineTo(379,125);
context.closePath();
context.stroke();
context.fill();

/* schoorsteen 3 */
context.beginPath();
context.lineWidth = 2;
context.strokeStyle = "black";
context.fillStyle = "black";
context.moveTo(305,120);
context.lineTo(348,130);
context.lineTo(377,125);
context.lineTo(340,115);
context.closePath();
context.stroke();
context.fill();
