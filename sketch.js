// variables
let posX;
let posY;
let diametro;
let radio;
let colorCirculo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // IMPRESION DE VARIABLES
  // print(posX);c
  // posX = 234;
  // print(posX);
  // posX = posX + 25;
  // print(posX);
  // posX = posX * 2
  // print(posX);
  // posX = posX / 5;
  // print(posX);
  // posX *= 8;
  // print(posX);
  // posX += 1;
  // print(posX);
  // posX ++;
  // posicion de la bolita
  // = asigna el numero al lado debecho
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  diametro = 30;
  // se automatiza el tamaño
  radio = diametro / 2;
  colorCirculo = color(22, 100, 50);
  // frameRate(2); fotogramas de movimiento
}

// funcion de dibujado automatico
// la pelota se mueve restando o sumando posiciones
function draw() {
  background(255);

  // velocidad deternimada por el calculo de la varible
  posX -= 5;
  // la posicion en x del ciculo (centro) + mas 25 del tamaño general del ciculo
  if (posX < -radio) {
    diametro = random(10, 100);
    colorCirculo = color(random(100, 255), random(100, 255), random(100, 255));
    radio = diametro / 2;
    posX = windowWidth + radio;
    // posicion en x el ancho de la pantalla, si la posicion en x es menor a sero la volita se mueve
  }
  fill(colorCirculo);
  ellipse(posX, posY, diametro, diametro);
  // circle(posX, posY, diametro);
  print(posX);
}
