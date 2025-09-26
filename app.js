

const equiposFutbol = [
  {  nombreEquipo: "River plate", logo:"https://e7.pngegg.com/pngimages/894/41/png-clipart-club-atletico-river-plate-superliga-argentina-de-futbol-football-estadio-monumental-antonio-vespucio-liberti-river-plate-vs-estudiantes-de-la-plata-football-text-logo-thumbnail.png", ataque:80, defensa:79 },
  {  nombreEquipo: "Real Madrid", logo:"https://static.vecteezy.com/system/resources/previews/044/626/810/non_2x/real-madrid-logo-on-transparent-background-free-vector.jpg", ataque:95,defensa:91 },
  {  nombreEquipo: "Milan f.c" , logo:"https://e7.pngegg.com/pngimages/927/303/png-clipart-acm-1899-logo-a-c-milan-uefa-champions-league-serie-a-uefa-europa-league-inter-milan-1000-sport-trademark.png", ataque:85, defensa:84}
];

function registrarUsuario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const resultado = document.getElementById("resultado");
  const opciones = document.getElementById("opciones");
  const seleccion = document.getElementById("seleccion");

  if (nombre === "" || email === "") {
    resultado.innerHTML = "<p style='color:red'>Por favor completa todos los espacios.</p>";
    return;
  }

  resultado.innerHTML = `
    <h3>Datos registrados:</h3>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${email}</p>
  `;

  opciones.innerHTML = "<h3>Cargando equipos de futbol</h3>";
  seleccion.innerHTML = "";

  setTimeout(() => {
    opciones.innerHTML = "<h3>Elegi tu equipo de futbol:</h3>";
    equiposFutbol.forEach(equipo => {
      mostrarEquipo(equipo);
    });
  }, 1000); 
}
function mostrarEquipo(equipo) {
  const opciones = document.getElementById("opciones");

  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjetaEquipo");
  tarjeta.innerHTML = `
    <h4>${equipo.nombreEquipo}</h4>
    <img src="${equipo.logo}" alt="${equipo.nombreEquipo}" />
    <p>Ataque: ${equipo.ataque}</p>
    <p>Defensa: ${equipo.defensa}</p>
  `;
  const botonElegir = document.createElement("button");
  botonElegir.textContent = "Elegir";
  botonElegir.classList.add("boton-elegir");
  botonElegir.dataset.equipo = equipo.nombreEquipo;

  tarjeta.appendChild(botonElegir);
  opciones.appendChild(tarjeta);
  
}

function elegirEquipo(nombreEquipo) {
  const seleccion = document.getElementById("seleccion");
  seleccion.innerHTML = `Has elegido al equipo <strong>${nombreEquipo}</strong>. a dejar todo!`;
}
document.getElementById("registrar").addEventListener("click", registrarUsuario);