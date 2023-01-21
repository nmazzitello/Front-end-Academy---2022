const nuevoCV= document.getElementById("nuevoCV");
const url="https://randomuser.me/api/";
let anio= document.getElementById("anioActual");

document.addEventListener("DOMContentLoaded", () => {
    anio.innerText= new Date().getFullYear();
  });


nuevoCV.addEventListener("click", nuevaPersona);

async function nuevaPersona(){
    let resultado= await fetch(url)
        .then(response => response.json())
        .then(data=> {
             cargarPersonaNueva(data);
        })
    }

function cargarPersonaNueva(datos) {
    let nombre = document.getElementById("nombre");
    let fotoPerfil = document.getElementById("fotoPerfil");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let pais = document.getElementById("pais");
    let direccion = document.getElementById("direccion");
    let divLinkedin= document.getElementById("divLinkedin")
    let sobremi = document.getElementById("sobremi");

    divLinkedin.style.display="none";

    console.log(divLinkedin)

    let persona = {
        nombre: datos.results[0].name.last + ", " + datos.results[0].name.first,
        fotoPerfil: datos.results[0].picture.large,
        email: datos.results[0].email,
        telefono: datos.results[0].phone,
        pais: datos.results[0].location.country,
        direccion: datos.results[0].location.street.name + " " + datos.results[0].location.street.number,
        sobremi: "Lorem ipsum ibh. Dignissim dapibus accumsan suscipit urna rutrum tempus mattis phasellus, placerat neque himenaeos sagittis ante blandit. Curabitur fringilla class sollicitudin morbi rhoncus risus himenaeos, accumsan posuere maecenas conubia neque ridiculus, vehicula nam aenean taciti placerat est."
    }

    nombre.innerText = persona.nombre;
    fotoPerfil.src = persona.fotoPerfil;
    email.innerText = persona.email;
    telefono.innerText = persona.telefono;
    pais.innerText = persona.pais;
    direccion.innerText = persona.direccion;
    sobremi.innerText = persona.sobremi;
}
    
