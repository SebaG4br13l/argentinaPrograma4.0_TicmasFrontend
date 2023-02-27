// ESTRUCTURAS DE CONTROL DE FLUJO, CONDICIONALES E ITERADORES  

//Condicionales


/*
Sentencia if else
es una estructura de control de flujo que sirve para tomar una desicion frente a una condicion.
*/
//Ejemplo:
var edad = 18

if (edad >= 18) {
    console.log("la persona es mayor de edad")
} else {
    console.log("La persona es menor de edad")
}

//Iteradores

/*
Existen dos tipos de secuencias de iteracion, for y while
*/

//Ejemplo while loop
while (condition) {
    //bloque de codigo a ejecutar
}

//Ejemplo For loop
var x = 0
for (x; x < 10; x++) { console.log(x) }


/*
Al momento de utilizar loops, hay que tener especial atencion a que el bucle o ciclo no entre en un circulo infinito, puesto que dara errores en ejecucion,
o puede entrar en un circulo infinito de repeticiones y colgar la maquina.
*/

