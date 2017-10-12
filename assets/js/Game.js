/*|||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*                  PUNTAJES                           */
/* *compita1 = -1 punto                                */
/* *policia1 = +1 punto                                */
/* *estudiante1 = +2 puntos                            */
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||*/

function borrarId ( id ){
        var objeto = document.getElementById(id);
    //var elemento = document.getElementById( "Cabeza");
   // var ball = elemento;
    /*Borra un elemento */
            objeto.parentNode.removeChild(objeto);
    //Compa1.parentNode.removeChild(Compa1);
//alert('manejado desde JS');
}  

function Ball ( name ) {

        
    this.id = name;
    this.objeto = document.getElementById(name);
    this.y = Math.floor((Math.random() * (this.objeto.offsetHeight-22)) + 1);
    /*offsetHeight -> Extrae el alto de un elemento con padding y bordes*/
    this.x = Math.floor((Math.random() * (this.objeto.offsetWidth-22)) + 1);
    /*offsetHeight -> Extrae el alto de un elemento con padding y bordes*/
    this.objeto.style.left=String(this.x)+"px";
    /*Cambiamos la posicion de la pelota aletrando el CSS*/
    this.objeto.style.top=String(this.y)+"px";
        
         
    
    
    this.objeto.addEventListener("click", function() {
            borrarId(this.id);
            clearInterval(idSetInterval);
           
        /*falta parar el moviemiento de la pelota para que no genere errores*/
        //borrarBall(Compa1);
        //ballRed.delBall();
         });
    
    
    
   
       
    
   
    
  
}


//function borrarBall(elemento){
    
    //var elemento = document.getElementById( "Cabeza");
   // var ball = elemento;
    /*Borra un elemento */
  //  elemento.parentNode.removeChild(elemento);
    //Compa1.parentNode.removeChild(Compa1);
//alert('manejado desde JS');
    
//}


function IniciarGame(){
    
    var puntaje = 0;

}
       
window.onload = function()  /*funcion que se ejecuta al terminar la carga del documento*/

{
   
   
/*posicionamos la pelota de manera aleatoria en la pantalla*/
    


    var Compa1Cabeza = document.getElementById( "Cabeza");
    var Compa1 = document.getElementById( "Compa1");
    
   
    
    var ballRed = new Ball ("Compa1");
    //Compa1Cabeza.addEventListener("click", function() {
      //  ballRed.delBall();
        //borrarBall(Compa1);
        //ballRed.delBall();
//    });
    
    /*Compa1Cabeza.addEventListener("onclick", borrarBall("Cabeza"));
    /*
    document.getElementById("Cabeza").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("Cabeza").parentNode.removeChild(document.getElementById("Cabeza"));
}
    */


}
 
 
     
function moverElemento(){

    var elemento =document.getElementById('Compa1');
         
     var posicion = elemento.clientLeft;
     
     if(posicion < 1500){
         elemento.style.left = (posicion + 1) + "px";
         setTimeout("moverElemento()",1000);
         
     
}   
    

    
   /* Compa1Cabeza.onclick = function (){
        
        /*Borra un elemento */
     /*   Compa1.parentNode.removeChild(Compa1);
        
        alert('manejado desde JS');
    }*/
     
     /*var Compa1 = document.getElementById('Compa1');
                Compa1.onclick = function () {
                    alert('hola mundo!');
                }
                var i= 2;
                
                while(i<34){
                    Compa1.style.left= i + "vw";
                    
                    
                    setTimeout(function() { 
  //your code to be executed after 1 second
                        i++;
                        }, 1000);
                }*/
         

         

}
/* controlY, determina dirección vertical: 1-baja|0-sube */
var controlY=Math.floor((Math.random() * 1) + 0);
 
/* controlX, determina dirección vertical: 1-derecha|0-izquierda */
var controlX=Math.floor((Math.random() * 1) + 0);
 
/* definimos las variables que contienen la posicion de la pelota */
var x = 0;
var y = 0;
 
        // definimos la velocidad de movimiento en pixels
        var velocidad=1;
 
/*variable que inicia el boton contiene */
var idSetInterval = 0;

/*funcion que se ejecuta al pulsar el botón iniciar*/
function iniciar(){    
    
    if( idSetInterval == 0){
            idSetInterval=setInterval("mover()",0);
            
    }
}
 
        /*funcion que se ejecuta por cada iteracion del setInterval()*/
        function mover()
        {
            /*Control  vertical*/
            if( controlY == 1 ){
                
                y+=velocidad;
                
            }else{
                
                y-=velocidad;
                
            }
            
            if( y < 0 ){
                
                controlY=1;
                y=velocidad;
                
            }else if( y >= document.getElementById("Montaje").offsetHeight-22){
                
                controlY=0;
                y=document.getElementById("Montaje").offsetHeight-22;
                
            }
 
            /* Control horizontal*/
            if(controlX==1)
            {
                
                x+=velocidad;
                
            }else{
                
                x-=velocidad;
                
            }
 
            if(x<0){
                
                controlX=1;
                x=velocidad;
                
            }else if( x >= document.getElementById("Montaje").offsetWidth-22){
                controlX=0;
                x=document.getElementById("Montaje").offsetWidth-22;
            }
            document.getElementById("Compa1").style.left=String(x)+"px";
            document.getElementById("Compa1").style.top=String(y)+"px";
        }
 
        // funcion que se ejecuta para parar
        function parar()
        {
            clearInterval(idSetInterval);
            idSetInterval=0;
        }
