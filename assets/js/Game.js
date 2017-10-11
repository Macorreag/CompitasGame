
        
       
window.onload = function()  /*funcion que se ejecuta al terminar la carga del documento*/

{
/*posicionamos la pelota de manera aleatoria en la pantalla*/
    
    /*********************BUG!!! no es responsive*****************/
    /*Pensar como posicionar nuevamente la imagen tras un cambio del tamaño de la ventana 
    *Asumir mediadas relativas y calcular respecto estas el random 
    *
    */
    var y = Math.floor((Math.random() * (document.getElementById("Montaje").offsetHeight-22)) + 1);
    /*offsetHeight -> Extrae el alto de un elemento con padding y bordes*/
    var x = Math.floor((Math.random() * (document.getElementById("Montaje").offsetWidth-22)) + 1);
    /*offsetHeight -> Extrae el alto de un elemento con padding y bordes*/
    document.getElementById("Compa1").style.left=String(x)+"px";
    /*Cambiamos la posicion de la pelota aletrando el CSS*/
    document.getElementById("Compa1").style.top=String(y)+"px";
    
  
    
    
    
    
}
 
 
     
function moverElemento(){

    var elemento =document.getElementById('Compa1');
         
     var posicion = elemento.clientLeft;
     
     if(posicion < 1500){
         elemento.style.left = (posicion + 1) + "px";
         setTimeout("moverElemento()",1000);
         
     
}   
     
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
       // controlY, determina dirección vertical: 1-baja|0-sube
        var controlY=Math.floor((Math.random() * 1) + 0);
 
        // controlX, determina dirección vertical: 1-derecha|0-izquierda
        var controlX=Math.floor((Math.random() * 1) + 0);
 
        // definimos las variables que contienen la posicion de la pelota
        var x=y=0;
 
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
