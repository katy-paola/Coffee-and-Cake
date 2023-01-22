//creamos un objeto para las propiedades y otro para los métodos

var propSlider = {
    //propiedades
    slider: document.getElementById('slider'),
    primerSlide: null,
}

var metSlider = {
    //métodos
    inicio: function(){
        setInterval(metSlider.moverSlide, 2000); //cada 3 segundos se ejecutará el método moverSlide
                                                 //para eso usamos el método setInterval
    },
    moverSlide: function(){
        propSlider.slider.style.transition = 'all 1s ease'; //le damos una transición al slider
        propSlider.slider.style.marginLeft = '-100%'; //le decimos que se mueva 200% a la izquierda

        setTimeout(function(){ //para que el slider se mueva de forma infinita, usamos el método setTimeout
            propSlider.primerSlide = propSlider.slider.firstElementChild; //obtenemos el primer elemento hijo con
                                                                          //firstElementChild
            propSlider.slider.appendChild(propSlider.primerSlide); //agregamos el primer elemento hijo al final

            propSlider.slider.style.transition = 'unset'; //le quitamos la transición al slider

            propSlider.slider.style.marginLeft = '0'; //le decimos que se mueva 0% a la izquierda
        }, 1000); //el método setTimeout se ejecutará después de 1 segundo
    }
}

metSlider.inicio();