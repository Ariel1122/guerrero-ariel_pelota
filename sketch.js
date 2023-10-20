// variables
let posX;
let posY;
let diametro;
let radio;
let colorCirculo;
let fondo;

//EJECUCION DE LA FUNCION
function setup() {
  createCanvas(windowWidth, windowHeight);
  // IMPRESION DE VARIABLES
  // print(posX);c

  // posicion de la bolita
  // = asigna un valor
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  diametro = 100;
  radio = diametro / 2;
  fondo = color(255, 100, 50);
  colorCirculo = color(22, 100, 50);
  // frameRate(2); fotogramas de movimiento
}

// funcion de dibujado automatico
// la pelota se mueve restando o sumando posiciones
function draw() {
  background(fondo);

  posX -= 10; //  posX se disminuye en 10 unidades en cada iteración, lo que hace que la pelota se mueva hacia la izquierda.

  // Si posX es menor que el valor negativo del radio, se considera que la pelota ha salido completamente del lienzo en el lado izquierdo.
  if (posX < -radio) {
    // Generar una nueva posición aleatoria en el eje Y
    posY = random(0, windowHeight);

    diametro = random(10, 100);
    colorCirculo = color(random(100, 255), random(100, 255), random(100, 255));
    fondo = color(random(100, 255), random(100, 255), random(100, 255));
    radio = diametro / 2;

    posX = windowWidth + radio;
  }
  strokeWeight(4);
  fill(colorCirculo);
  ellipse(posX, posY, diametro, diametro);
  print(posX);
}
