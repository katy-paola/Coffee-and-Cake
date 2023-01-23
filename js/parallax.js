//crearemos un objeto para las propiedades y otro para los metodos
//el efecto parallax se basa en que cuando se hace scroll se mueve la imagen de fondo de la sección, pero con una
//velocidad menor que el scroll

//usaremos una función autoejecutable para que no se pueda acceder a las propiedades y métodos desde fuera

(function(){
    var propParallax = {
        //propiedades
        seccion: document.querySelector('.parallax'), //seleccionamos la sección que queremos que tenga parallax
        recorrido: null, //cuanto se ha recorrido el scroll
        limite: null //cuando se llegue a este punto se detendrá el scroll
    }
    var metParallax = {
        //métodos
        inicio: function(){
            window.addEventListener('scroll', metParallax.scrollParallax); //cuando se haga scroll se ejecutará la 
                                                                           //función scrollParallax
        },
        scrollParallax: function(){
            propParallax.recorrido = window.pageYOffset; //esta propiedad nos da el valor del scroll en pixeles

            //la propiedad offsetTop nos da la distancia en px entre el elemento y el top de la página
            //y la propiedad offsetHeight nos da el alto del elemento
            propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

            //este condicional hará que el efecto empiece cuando se empieza a ver la sección abajo y no cuando esta llega al top
            if(propParallax.recorrido > (propParallax.seccion.offsetTop - window.outerHeight) && propParallax.recorrido <= propParallax.limite){
                //le restamos el offsetTop para que el scroll empiece desde 0
                //y lo dividimos entre 1.5 para que la imagen se mueva más lento que el scroll
                //y le agregamos px para que sepa que es una medida de pixeles
                propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';
            }
            else{
                //si no se cumple la condición anterior, la imagen se quedará en 0
                propParallax.seccion.style.backgroundPositionY = 0;
            }
        }
    }

    metParallax.inicio();
}())