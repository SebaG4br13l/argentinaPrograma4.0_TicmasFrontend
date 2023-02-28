//Formas de agregar comportamiento
// para probar las funcionalidades, comentar y descomentar el bloque a probar

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


// mediante id y eventListener combinados
document.getElementById('button').addEventListener('click', function() {
    console.log('Capturamos el evento click');
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
});