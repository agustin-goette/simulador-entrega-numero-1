const registro = [];
const form = document.getElementById("miFormulario");
const p = document.getElementById("mensaje");
let datosId = 1;

form.addEventListener("submit", function (event) {
   event.preventDefault();
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;

   const datos = {
      id: datosId++,
      name: name,
      email: email
   };


   registro.push(datos);
   mostrarDatos();
   form.reset();

   localStorage.setItem("registro", JSON.stringify(registro));
   const recuperarDatos = JSON.parse(localStorage.getItem("registro"));
   console.log(recuperarDatos);
})



function mostrarDatos() {
   p.innerHTML = "";
   registro.forEach((datos) => {
      const ver = document.createElement("div");

      ver.innerHTML = `<p><strong>${datos.name} - ${datos.email}</strong></p>`;

      p.appendChild(ver);
   })
}

function elegirEquipo() {
   function equipos(nombre, ataque, defensa) {
      this.nombre = nombre;
      this.ataque = ataque;
      this.defensa = defensa;
   }; 

const opciones = [];

const eleccionEquipo = () => {
   let listado = `listado de equipos\n`;

   for (let i = 0; i < opciones.length; i++) {
      listado += `
         - nombre: ${opciones[i].nombre}
         - ataque: ${opciones[i].ataque}
         - defensa: ${opciones[i].defensa}
         `;
   }
   return console.log(listado);
};


opciones.push(new equipos("River",82,80));
opciones.push(new equipos("Real Madrid",92,90));
opciones.push(new equipos("Milan",85,80));
eleccionEquipo();

   


const elegirEquipo =  [
   {nombre : "river plate", ataque: 82, defensa:80},
   {nombre:"real madrid", ataque:92, defensa:90},
   {nombre: "milan" , ataque:85, defensa:80},
];

const listadoEquipo = elegirEquipo.map((el)=>el.nombre);
console.log(listadoEquipo);


}

elegirEquipo();