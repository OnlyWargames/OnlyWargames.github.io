//2016 08 04 jueves
//colegio oratorio don Bosco
//santiago de chile
//Latinoamérica
//clase de programación
//funciona con p5.js
//only wargames canal de youtube suscribete

var diametro;

diametro=100

//setup() corre una vez
//al principio function setup() {
	//creo lienzo
	//createCanvas(800, 600);

	//pintar el fondo verde
	//background(red, green, blue)
	//0 es nada, 255 es todo background(0, 255, 0)

function setup() {	
	createCanvas(800, 600);	
	background(255, 10, 25);
}




function draw() {


	//definir estilo de la elipse
	//definir ancho del borde
	//strokeWeight(px);
	strokeWeight(10);
	
	//definir color del borde
	//stroke(color)
	//borde azul semitransparente
	stroke(255, 164, 32, 30/2);

	//definir color del relleno
	//fill(color)
	//amarillo semitransparente
	//fill(255, 164, 32, 30/2);
	fill(255*mouseY/height, 0, 0);
	
	
	//explicación del color
	//1: grayscale, 0 is black 255 is withe
	//2: grayscale + alpha
	//3: RGB, red, green, blue
	//4: RGB + alpha
	//alpha; 0 es transparente, 255 es solido

  	//dibujar elipse
	//que sigue al mouse
	//ellipse(posX, posY, width, height);
	ellipse(mouseX, mouseY, diametro, diametro);
	
	diametro = 50 + 100 * random(1000)/1000;



}