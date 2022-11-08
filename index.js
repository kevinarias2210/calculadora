// Primero se crean 3 variables globales, (operandoa, operandob y operacion) sin declararsen.

var operandoa;
var operandob;
var operacion;

/*Se crea otra variable que se llama boton, que es igual a que el documento que
obtenga un selector de clase llamada noche.*/

/*Se crea una constante llamado imagenButtn, para que obtenga el elemento un id "imageButton"*/

let boton = document.querySelector('.noche');
const imagenButtn = document.getElementById('imageButton');
/*Se vuelve a llamar la variable boton, para usar un metodo de javascript,
(addEventListener) y adentro hay una funcion anonima arrow. Entonces lo que
se está diciendo aquí es que: cuando la variable boton escuche click en el 
selector indicado arriba, haga la funcion que hay adentro*/
boton.addEventListener('click', ()=>{
    document.body.classList.toggle('oscuro');
    boton.classList.toggle('active');
    if(document.querySelector('.oscuro')){
        imagenButtn.setAttribute('src', 'sun.png')
    }else if(document.querySelector('.noche')){
        imagenButtn.setAttribute('src', 'moon.png');
    }
    /*Entonces la sentencia de la funcion es: En el html(document) y dentro del body 
    busque en la lista de clases y como el body no tiene clase, se coloca el toggle 
    para añadir o sustituir la clase que está dentro de parentecis.
    al boton le decimos que agregue en la lista de clase "active", para que cuando haga
    click nos demos cuanta que está activo.
    Despúes coloco una condicion if, para que diga... si el documento tenga el selector
    de clase .oscuro entonces en sus atributos agregueme esta imagen. Posdata casi que no lo pude hacer xD*/
});


/*Entonces con esto ya tiene una funcionalidad para poder cambiar el background en el css
con la clase "oscuro"*/

/*Ahora en esta funcion se llama tambien en el index en la etiqueta body con un evento "onload"
Cuando se empieza a cargar la pagina inicia esta función init*/
function init(){
    /*Ahora en estas variables se estan asignando cada uno unos botones que corresponde a la
    calculadora, pero su resultado es decirle que: obtenga el elemento Id que está en el
    html y entre parentesis está su identificador.*/

    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    /*En esta parte se están llamando las variables llamadas con numeros creadas anteriormente
    con el metodo onclick y que adentro de esa variable sea una funcion. Lo que hace es: 
    que cada vez que se clickea empieza a ejecutar la sentensia que es: llamar la variable 
    resultado con el elemento de text.Content para que se vea en la pantalla y de el valor 
    string "1". Hay un parametro que no tiene funcionalidad.*/

    //Eventos de click
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }

    /*Acá pasa algo parecido con el metodo onclick y su funcion, pero la sentencia es otra
    funcion llamado resetear*/ 

    reset.onclick = function(e){
        resetear();
    }

    /*Esta parte es donde se definen los operadores y el igual. pasando de una en la sentencia
    de cada funcion es: llamar las variables no declaradas anteriormente, como operandoa que es
    el resultado de lo que se va a imprimir como 0 a 9 con su elemento textContent. Si se llama
    solo el resultado, botaria un resultado de la clase que se esta obtiendo por este codigo
    "document.getElementById('resultado');" ahora con la otra variable vacia, operacion se
    está asignando los operadores que faltaban y limpiar es una funcion*/

    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    /*En esta linea la variable resultado.textcontent se guarda en la variable operandob
    y la funsion resolver*/
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
}

/*Esta funcion limpiar hace que cuando se obtiene un numero y se presione un operador
va a traer un string vacio */

function limpiar(){
    resultado.textContent = "";
}

/*Funcion resetear, su sentencia es dar un contenido vacio en la variable resultado, y 
en las variables operandoa y b se reasignan en 0 para que vuelva a empezar y la operacion tambien
se optiene vacio, por eso que en la variable reset se llama esta funcion.*/

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

/*Ahora vamos en la ultima funcion que es resolver, que adentro tiene una variable res igual a 0
y un switch que entre parentecis llama de nuevo la variable operacion que contiene todos los
operadores, su sentencia en los casos, dice que si un caso es un string en especifico
tiene que cumplirlo si o si, o si no, no va a pasar lo que hay adentro de este. ahora como
se esta llamando de nuevo la variable res que es igual al operandoa que es un numero,
mas (o segun el operador), la variable operandob que recibe otro numero, da el resultado
los breaks lo que hace es que cuando pase un caso se imprima el que se cumple, mas no los otros
llama la funsion resetear para que a partir de ahí se pueda resetear y que tambien la variable
resultado sea es que es la operacion matematica*/ 

function resolver(){
    var res = 0;
    switch(operacion){
    case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
    case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
}