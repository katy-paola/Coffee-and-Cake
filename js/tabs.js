//creamos un objeto para las propiedades y otro para los métodos

//creamos una función autoejecutable para que no se pueda acceder a las propiedades y métodos desde el exterior
//vamos a crear tabs para el menú de navegación
(function(){
    var propTabs = {
        primer_encabezado: document.getElementById('encabezado_menu').firstElementChild, //obtenemos el primer elemento
                                                                                         //hijo de encabezado_menu
        primer_contenido: document.getElementById('contenido_menu').firstElementChild, //obtenemos el primer elemento 
                                                                                       //hijo de contenido_menu
        enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'), //obtenemos todos los enlaces
        li_encabezado: document.querySelectorAll('#encabezado_menu li'), //obtenemos todos los li
        divs_contenido: document.querySelectorAll('#contenido_menu > div'), //obtenemos todos los div
        contenido_activo: null //guardamos el contenido activo
    }
    var metTabs = {
        inicio: function(){
            propTabs.primer_encabezado.className = 'active'; //le agregamos la clase active al primer encabezado
            propTabs.primer_contenido.className = 'active'; //le agregamos la clase active al primer contenido

            for(var i = 0; i < propTabs.enlaces_encabezado.length; i++){
                propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
            }
        },
        evento: function(e){ //e es el evento que se está produciendo
            e.preventDefault(); //evitamos que el enlace haga su función por defecto
            for(var i = 0; i < propTabs.li_encabezado.length; i++){
                propTabs.li_encabezado[i].className = ''; //quitamos la clase active a todos los li
            }
            for(var i = 0; i < propTabs.divs_contenido.length; i++){
                propTabs.divs_contenido[i].className = ''; //quitamos la clase active a todos los div
            }
            this.parentElement.className = 'active'; //le agregamos la clase active al li que se ha hecho click
            propTabs.contenido_activo = this.getAttribute('href'); //obtenemos el valor del atributo href y lo guardamos
                                                                   //en contenido_activo
            document.querySelector(propTabs.contenido_activo).className = 'active'; //le agregamos la clase active al contenido
            document.querySelector(propTabs.contenido_activo).style.opacity = 0;

            setTimeout(function(){
                document.querySelector(propTabs.contenido_activo).style.opacity = 1;
            }, 100);
        }
    }
    metTabs.inicio();
}())
