//El efecto lightbox sirve para mostrar una imagen en grande cuando se hace click sobre ella
//Vamos a crear dos objetos, uno para almacenar las propiedades y otro para los métodos
//queremos que, al hacer click en una imagen, se ejecute una función, para eso utilizamos los eventos

//creamos el objeto con las propiedades del efecto lightbox

var propLightbox = {
    //propiedades

    //seleccionamos todas las imágenes que tengan la clase lightbox, esto nos devolverá un array de imágenes
    imgContainer: document.getElementsByClassName('lightbox'), 

    //almacenará la imagen
    imagen: null, 

    //almacenará la ruta de la imagen
    imagenSrc: null, 

    //almacenará el body
    cuerpoDom: document.getElementsByTagName('body')[0], 

    //almacenará el div que crearemos que es el contenedor principal
    lightbox_container: null, 

    //almacenará el otro div que crearemos que es el contenedor de la imagen
    modal: null, 

    //almacenará el botón que crearemos para cerrar la imagen
    cerrarModal: null, 

    //almacenará la animación que queremos que tenga el efecto lightbox
    animacion: 'fade' //fade, slide, zoom
}

//creamos el objeto con los métodos del efecto lightbox

var metLightbox = {
    //métodos

    //creamos el método que se ejecutará al hacer click en una imagen
    inicio: function(){
        for (var i = 0; i < propLightbox.imgContainer.length; i++) {

            //aquí lo que hacemos es recorrer el array de imágenes y asignarle un evento a cada una de ellas, 
            //el evento será click
            propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
        }
    },

    //creamos el método que captura la imagen y que además ejecuta el método lightbox
    capturaImagen: function(){

        //almacenamos la imagen a la que se le hizo click, la almacenamos en la propiedad imagen
        //hay que tener en cuenta que aquí no estamos almacenando una imagen, sino un div que tiene esa imagen 
        //como fondo
        propLightbox.imagen = this; 

        //ejecutamos el método lightbox y le pasamos como parámetro la imagen a la que se le hizo click
        metLightbox.lightbox(propLightbox.imagen); 
    },

    //creamos el método que crea el efecto lightbox
    lightbox: function(imagen){

        //style es una propiedad que nos permite asignar estilos css desde js, pero no sirve para acceder a los 
        //estilos que ya están asignados
        //usaremos un nuevo método para acceder a las propiedades css de un elemento, 
        //este es el método getComputedStyle
        //getComputedStyle recibe dos parámetros, el primero es el elemento al que queremos acceder y el segundo 
        //es un pseudo-elemento, si no lo usamos, se le asigna null
        //con este método accederemos a todos los estilos, pero solo queremos acceder al background-image para 
        //obtener la ruta de la imagen
        
        propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
        //slice nos permite cortar una cadena de texto, en este caso, cortamos la cadena de texto que contiene la 
        //ruta de la imagen (para que nos devuelva lo que está dentro de las comillas)
        //la cortamos desde el 5 hasta el -2, porque queremos que nos devuelva la ruta de la imagen sin las 
        //comillas y sin la palabra url (url("ruta de la imagen")) 

        //creamos un div y le asignamos el id lightbox_container, el div se creará dentro del body
        propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container'); 

        //almacenamos el div en la propiedad lightbox_container
        propLightbox.lightbox_container = document.getElementById('lightbox_container'); 

        //le asignamos estilos al div
        propLightbox.lightbox_container.style.width = '100%'; 
        propLightbox.lightbox_container.style.height = '100%'; 
        propLightbox.lightbox_container.style.position = 'fixed'; 
        propLightbox.lightbox_container.style.zIndex = '1000'; 
        propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)'; 
        propLightbox.lightbox_container.style.top = '0'; 
        propLightbox.lightbox_container.style.left = '0'; 

        //creamos un div y le asignamos el id modal, el div se creará dentro del div con el id lightbox_container
        propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal'); 

        //almacenamos el div en la propiedad modal
        propLightbox.modal = document.getElementById('modal'); 

        //le asignamos estilos al div
        propLightbox.modal.style.height = '100%'; 

        //creamos una imagen y le asignamos la ruta de la imagen, la imagen se creará dentro del div con el id modal
        propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc); 
        
        //le asignamos la clase imagen-modal a la imagen
        //esto lo hacemos para poder darle estilos a la imagen desde css
        propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal'); 
        
        if (propLightbox.animacion == 'fade') {

            //le asignamos una opacidad de 0 a la imagen
            document.getElementsByClassName('imagen-modal')[0].style.opacity = '0';
            
            //creamos una función que se ejecutará después de 50 milisegundos
            setTimeout(function(){

                //le asignamos una opacidad de 1 a la imagen
                document.getElementsByClassName('imagen-modal')[0].style.opacity = '1'; 
            }, 50); 
        }
        
        //la propiedad innerHTML nos permite acceder al contenido html de un elemento
        //en este caso, le asignamos un ícono de font awesome dentro del div con el id modal
        propLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times"></i>'; 

        //almacenamos el ícono en la propiedad cerrarModal
        propLightbox.cerrarModal = document.getElementById('cerrar_modal'); 

        //le asignamos un evento click al ícono
        propLightbox.cerrarModal.addEventListener('click', metLightbox.cerrarModal); 
    },

    //creamos el método que cierra el efecto lightbox
    cerrarModal: function(){

        //eliminamos el div con el id lightbox_container
        propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container); 
    }
}

//ejecutamos el método inicio
metLightbox.inicio();

















