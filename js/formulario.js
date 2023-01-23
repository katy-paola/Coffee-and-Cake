//crearemos un objeto para las propiedades y otro para los metodos

//función autoejecutable para proteger el código
(function(){
    var propFormulario = {
        //propiedades
        formulario: document.formulario_contacto, //seleccionamos el formulario mediante su atributo name, que en este
                                                  //caso es formulario_contacto
        elementos: document.formulario_contacto.elements, //seleccionamos todos los elementos del formulario
        error: null, //variable para determinar si hay un error o no
        textoError: null //texto que se mostrará en el error
    }
    var metFormulario = {
        //metodos
        inicio: function(){
            //aquí lo que hacemos es revisar el tipo de input
            for(var i = 0; i < propFormulario.elementos.length; i++){
                if(propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea'){
                    propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                    propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
                }
            }

            //cuando el formulario se envíe, se ejecutará la función validarInputs
            propFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);
        },
        focusInput: function(){
            //el this hace referencia al elemento que está en foco

            //el this.parentElement hace referencia al elemento padre del elemento que está en foco

            //el this.parentElement.children[1] hace referencia al elemento hijo del elemento padre del elemento que está en foco
            
            //seleccionamos el elemento label y le agregamos la clase active
            this.parentElement.children[1].className = 'label active';
        },
        blurInput: function(){

            //si el elemento que está en foco no tiene valor, entonces le quitamos la clase active
            if(this.value == ''){
                this.parentElement.children[1].className = 'label';
            }
        },
        validarInputs: function(e){
            //recorremos todos los elementos del formulario
            for(var i = 0; i < propFormulario.elementos.length; i++){
                
                //si el elemento está vacío
                if(propFormulario.elementos[i].value == ''){
                    e.preventDefault(); //evitamos que el formulario se envíe
                    propFormulario.error = document.createElement('p'); //creamos un elemento p
                    propFormulario.textoError = document.createTextNode('El campo ' + propFormulario.elementos[i].name + ' es obligatorio');
                    propFormulario.error.appendChild(propFormulario.textoError); //agregamos el texto al elemento p
                    propFormulario.error.className = 'error'; //agregamos la clase error al elemento p
                    propFormulario.elementos[i].parentElement.appendChild(propFormulario.error); //agregamos el elemento p al elemento padre del elemento que está vacío
                }
                else{
                    //si el elemento no está vacío, entonces revisamos si tiene la clase error, es decir, si tiene
                    //un tercer hijo que corresponde al elemento p con la clase error
                    if(propFormulario.elementos[i].parentElement.children.length >= 3){
                        //si tiene la clase error, entonces la eliminamos
                        propFormulario.elementos[i].parentElement.removeChild(propFormulario.elementos[i].parentElement.lastChild);
                    }
                }
            }
        }
    }
    metFormulario.inicio();
}())