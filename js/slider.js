//creamos un objeto para las propiedades y otro para los métodos

//creamos una función autoejecutable para que no se pueda acceder a las propiedades y métodos desde el exterior

(function(){
    //propiedades
    var slider = document.getElementById('slider'),
        primerSlide = null;

    //métodos
    var inicio = function(){
        setInterval(moverSlide, 3000); //cada 3 segundos se ejecutará el método moverSlide
                                       //para eso usamos el método setInterval
    },
    moverSlide = function(){
        slider.style.transition = 'all 1s ease'; //le damos una transición al slider
        slider.style.marginLeft = '-100%'; //le decimos que se mueva 200% a la izquierda

        setTimeout(function(){ //para que el slider se mueva de forma infinita, usamos el método setTimeout
            primerSlide = slider.firstElementChild; //obtenemos el primer elemento hijo con
                                                    //firstElementChild
            slider.appendChild(primerSlide); //agregamos el primer elemento hijo al final

            slider.style.transition = 'unset'; //le quitamos la transición al slider

            slider.style.marginLeft = '0'; //le decimos que se mueva 0% a la izquierda
        }, 1000); //el método setTimeout se ejecutará después de 1 segundo
    }

    inicio();
}())
