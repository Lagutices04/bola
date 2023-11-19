const body = document.querySelector("body");
//ubicar los valores que estan especificamente en el body

const toggle = document.getElementById("toggle");
//del html se trae el id toggle

//toggle es un metodo que permite que a un elemento existente al que le asigne toggle por defecto empezara en false
// y cuando se llame el metodo toggle se volvera verdadero
//metodo togle es como un interruptor de luz cambia sus valores cada que se da click,como la luz si espicha prende si espicha otra vez se apaga


toggle.addEventListener('click',()=>{
    toggle.classList.toggle("toggleBlanco");
    //cuando escuche el click,traera el toggle
    //el classlist se usa para agregar o remover clases
    //en este caso el classlist es para traer la clase toggle blanco para cambiar los valores y el boton se mueva hacia la derecha
    //boton se pondra en on
    body.classList.toggle("toggleBlanco");
    //el boddy se cambiara a blanco
    //estos classlist clases temporales creadas en js y decoradas en css
    

    
})


