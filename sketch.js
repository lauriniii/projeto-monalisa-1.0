function setup() {
    createCanvas(400, 400);
  }
  let olhoX;
  let olhoY;
  
  function draw() {
    background("black");
    fill("pink");
    circle(200, 150, 300); // rosto
    fill("white");
    circle(150, 150, 60); // olho esquerdo
    circle(250, 150, 60); // olho direito
    line(150, 260, 270, 230); // boca
    fill("red");
    triangle(200, 180, 170, 220, 220, 220); // nariz
    line(123, 90, 170, 113); // sobrancelha esquerda
    line(225, 116, 279, 106); // sobrancelha direita
    // circle(150,150,10); // pupila esquerda
    //circle(250,150,10); // pupila direita
  
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
  
    circle(olhoX, olhoY, 10); // nova pupila esquerda
    circle(olhoX + 100, olhoY, 10); //nova pupila direita
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  