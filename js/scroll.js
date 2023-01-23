//crear dos objetos, uno para las propiedades y otro para los métodos

//función autoejecutable para proteger el código
(function(){
    var propScroll = {
        //propiedades
        posicion: window.pageYOffset, //posición del scroll
        scroll_suave: document.getElementsByClassName('scroll-suave'), //elementos con clase scroll-suave
        volver_arriba: document.getElementsByClassName('volver-arriba'), //elementos con clase volver-arriba
        destino: null, //elemento al que se va a mover
        seccion_distancia: null, //distancia entre el elemento y el scroll
        intervalo: null //intervalo de tiempo
    }
    var metScroll = {
        //métodos
        inicio: function(){
            for(var i = 0; i < propScroll.scroll_suave.length; i++){
                propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse)
            }
            for(var i = 0; i < propScroll.volver_arriba.length; i++){
                propScroll.volver_arriba[i].addEventListener('click', metScroll.subir)
            }
        },
        moverse: function(e){
            e.preventDefault()
            clearInterval(propScroll.intervalo);
            propScroll.destino = this.getAttribute('href')
            propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop - 94
            propScroll.posicion = window.pageYOffset
            propScroll.intervalo = setInterval(function(){

                //si la posición del scroll es menor a la distancia entre el elemento y el scroll
                if(propScroll.posicion < propScroll.seccion_distancia){
                    propScroll.posicion += 30 //aumentar la posición del scroll en 30px cada 15ms hasta llegar al elemento

                    //si la posición del scroll es mayor o igual a la distancia entre el elemento y el scroll
                    if(propScroll.posicion >= propScroll.seccion_distancia){
                        clearInterval(propScroll.intervalo) //limpiar el intervalo
                    }
                } else {
                    propScroll.posicion -= 30
                    if(propScroll.posicion <= propScroll.seccion_distancia){
                        clearInterval(propScroll.intervalo)
                    }
                }

                //el método scrollTo() lo que hace es mover el scroll a la posición que le indiquemos
                window.scrollTo(0, propScroll.posicion)
            }, 15)
                
        },
        subir: function(e){
            e.preventDefault()
            clearInterval(propScroll.intervalo)
            propScroll.posicion = window.pageYOffset
            propScroll.intervalo = setInterval(function(){
                if(propScroll.posicion > 0){
                    propScroll.posicion -= 30
                    if(propScroll.posicion <= 0){
                        clearInterval(propScroll.intervalo)
                    }
                }
                else {
                    return
                }
                window.scrollTo(0, propScroll.posicion)
            }, 15)
        }
    }
    metScroll.inicio()
}())