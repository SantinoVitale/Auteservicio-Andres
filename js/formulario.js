//Lo que hace este archivo es que cuando se completa el formulario del contato y tiene los siguientes datos Nombre, Correo y Mensaje, lo que hice fue que estos datos los guardara en el localStorage, y luego extrajera el mensaje y que lo imprima como un párrafo que fuera las opiniones de la página. 


class Contacto {
    constructor(id, usuario, correo, mensaje){
        this.id = +(id)
        this.usuario = usuario
        this.correo = correo
        this.mensaje = mensaje
    }
}
const Contactos = [];
let formulario = () => {

    let id = Contactos.length;
    let usuario = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value; 
    Contactos.push(new Contacto(id, usuario, correo, mensaje));
    console.log(Contactos);
    gardarcomentario("usuario" + id, JSON.stringify(Contactos[id]))
    let Comentarios = JSON.parse(localStorage.getItem("usuario" + 0));
    console.log(Comentarios)
    ShowContactos(Comentarios);
} 
const gardarcomentario = (clave, valor) => {
    localStorage.setItem(clave, valor);
};


const button = document.querySelector(".boton");


const ShowContactos = (opinion) => {
    
    let consultaStyle = document.querySelector(".respuestas");
    let contenedor  = document.createElement("div");
    contenedor.innerHTML = `
    <p> ${opinion.mensaje}</p>`;
    consultaStyle.appendChild(contenedor);

}



button.addEventListener("click", (e) => {
    e.preventDefault();
    formulario();
    
})
