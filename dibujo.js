var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

lienzo.beginPath(); //Funcion que indica el inicio del trazo
lienzo.strokeStyle = "white"; //Variable/atributo o propiedad que define el color de la linea
lienzo.moveTo(0, 0); //Función que indica dónde va a iniciar la linea
lienzo.lineTo(0, 300); //Función que indica en dónde termina la linea
//lienzo.stroke(); //Funcion para hacer o trzar la línea
lienzo.moveTo(0,300);
lienzo.lineTo(300, 300);
//lienzo.stroke();
lienzo.moveTo(300,300);
lienzo.lineTo(300, 0);
//lienzo.stroke();
lienzo.moveTo(300, 0);
lienzo.lineTo(0, 0);
lienzo.stroke();
lienzo.closePath(); //Función que indica que el trazo finaliza "Se levanta el lapiz"

lienzo.beginPath(); //Funcion que indica el inicio del trazo
lienzo.strokeStyle = "blue"; //Variable/atributo o propiedad que define el color de la linea
lienzo.moveTo(75, 0); //Función que indica dónde va a iniciar la linea
lienzo.lineTo(225, 0); //Función que indica en dónde termina la linea

lienzo.moveTo(225,0);
lienzo.lineTo(300, 75);

lienzo.moveTo(300,75);
lienzo.lineTo(300, 225);

lienzo.moveTo(300, 225);
lienzo.lineTo(225, 300);

lienzo.moveTo(225, 300);
lienzo.lineTo(75, 300)

lienzo.moveTo(75, 300);
lienzo.lineTo(0, 225)

lienzo.moveTo(0, 225);
lienzo.lineTo(0, 75)

lienzo.moveTo(0, 75);
lienzo.lineTo(75, 0)
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "yellow";

lienzo.moveTo(150, 150);
lienzo.lineTo(75,0);

lienzo.moveTo(150,150);
lienzo.lineTo(225,0);

lienzo.moveTo(150,150);
lienzo.lineTo(300,75);

lienzo.moveTo(150,150);
lienzo.lineTo(300,225);

lienzo.moveTo(150,150);
lienzo.lineTo(225,300);

lienzo.moveTo(150, 150);
lienzo.lineTo(75, 300);

lienzo.moveTo(150, 150);
lienzo.lineTo(0, 225);

lienzo.moveTo(150, 150);
lienzo.lineTo(0, 75);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "green";
lienzo.moveTo(110, 70);
lienzo.lineTo(190, 70);

lienzo.moveTo(110, 70);
lienzo.lineTo(150, 150);

lienzo.moveTo(190, 70);
lienzo.lineTo(150, 150);

lienzo.moveTo(110, 230);
lienzo.lineTo(190, 230);

lienzo.moveTo(110, 230);
lienzo.lineTo(150, 150);

lienzo.moveTo(190, 230);
lienzo.lineTo(150, 150);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "purple";
lienzo.moveTo(190, 130);
lienzo.lineTo(190, 170);

lienzo.moveTo(190, 130);
lienzo.lineTo(150, 150);

lienzo.moveTo(190, 170);
lienzo.lineTo(150, 150);

lienzo.moveTo(110, 130);
lienzo.lineTo(110,170);

lienzo.moveTo(110, 130);
lienzo.lineTo(150, 150);

lienzo.moveTo(110, 170);
lienzo.lineTo(150, 150);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(110, 70);
lienzo.lineTo(150, 0);

lienzo.moveTo(190,70);
lienzo.lineTo(150,0);

lienzo.moveTo(110, 230);
lienzo.lineTo(150, 300);

lienzo.moveTo(190, 230);
lienzo.lineTo(150, 300);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "brown";
lienzo.moveTo(190, 130);
lienzo.lineTo(300, 150);

lienzo.moveTo(190, 170);
lienzo.lineTo(300, 150);

lienzo.moveTo(110, 130);
lienzo.lineTo(0, 150);

lienzo.moveTo(110, 170);
lienzo.lineTo(0, 150);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "pink";
lienzo.moveTo(150, 150);
lienzo.lineTo(38, 38);

lienzo.moveTo(150, 150);
lienzo.lineTo(263, 38);

lienzo.moveTo(150, 150);
lienzo.lineTo(263, 263);

lienzo.moveTo(150, 150);
lienzo.lineTo(38, 263);

lienzo.stroke();
lienzo.clsePath();
