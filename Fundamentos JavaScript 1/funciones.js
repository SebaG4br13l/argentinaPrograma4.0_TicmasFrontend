//Formas de agregar comportamiento
// para probar las funcionalidades, comentar y descomentar el bloque a probar
/** 
// mediandte id
document.getElementById('button').onclick = function() {
    console.log('Capturamos el evento click');
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
}

 

// mediante eventListener
document.addEventListener('click',function() {
    console.log("Hola Mundo! desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
});

*/
// mediante id y eventListener combinados
document.getElementById('button').addEventListener('click', function() {
    console.log('Capturamos el evento click');
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
});

//cambiar colores de fondo

document.getElementById('boton_color').addEventListener('click', function() {
    //document.getElementsByTagName('body')[0].style.backgroundColor ='#FF0000'
    document.body.style.backgroundColor ='#FF0000';
});
document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor ='black';
});

//ocultar texto
document.getElementById('boton_ocultar').addEventListener('click', function() {
  document.getElementById ('demo').style.display = 'none';
})

// agregar funcionalidades mediante clases
const collection = document.getElementsByClassName('prueba');
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor= 'green';
}