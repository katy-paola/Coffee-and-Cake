//crearemos un objeto para las propiedades y otro para los metodos

//función autoejecutable para proteger el código
(function(){
    var propFormulario = {
        //propiedades
        formulario: document.formulario_contacto, //seleccionamos el formulario mediante su atributo name, que en este
                                                  //caso es formulario_contacto
        elementos: document.formulario_contacto.elements, //seleccionamos todos los elementos del formulario
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
        }
    }
    metFormulario.inicio();
}())