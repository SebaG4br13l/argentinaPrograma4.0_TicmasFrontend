// ITERADORES Y FUNCIONES

//Ejemplo de while
var x = 10;

while(x>0){
    console.log("Mi variable es: " + x);
    x--;
}

//Ejemplo de do while
var x = 10;

do{
    console.log("Mi variable es: " + x),
    x--;
}while (x>0);

// Sentencia Break

/*
Una sentencia de quiebre en el ciclo de codigo, que repsonde a una expresion.
si en un ciclo necesitamos que frente al surgimiento de algun valor o dato quiebre la iteracion.
De manera inversa, pero menos frecuentemente, se utiliza la sentencia Continue 
*/

var x = 10;

while(x>0){
    console.log("Mi variable es: " + x);
    x--;
    if (x==5){
        break;
    }
}


// FUNCIONES  

/*
Es un elemento que tiene una entrada y una salida, generando en el medio una transformacion.
Una funcion encapsula un bloque de codigo.
*/

//definicion de una funcion

function holaMundo(){
    console.log("Hola Mundo!");
}

//Invocacion de la funcion
holaMundo();
//Hola Mundo!

/*
La verdadera gracia de la funcion es poder reutilizar una porcion de codigo a lo largo del programa siempre que se requiera.
Las funciones pueden tomar parametros, datos que seran procesados para obtener un rasultado.
*/

function suma(a,b) {
    let resultado = a+b;
    return resultado
}

suma(1,2);
// 3