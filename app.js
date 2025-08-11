

function elegirEquipo() {
   let bienvenida = alert("bienvenidos");
   let jugador = prompt("nombre de jugador");

   const opciones = [];

   const equipos =(nombre, ataque, defensa) =>{
      opciones.push ({
         nombre: nombre,
         ataque: ataque,
         defensa: defensa,
      });
   }

   const eleccionEquipo = () =>{
      let listado = `listado de equipos\n`;

      for(let i=0; i< opciones.length; i++){
         listado+= `
         - nombre: ${opciones[i].nombre}
         - ataque: ${opciones[i].ataque}
         - defensa: ${opciones[i].defensa}
         `;
      } 
      return console.log(listado);
   };


   equipos ("river", 80,75);
   equipos("real madrid", 92, 90);
   equipos("milan",85,80);
   eleccionEquipo();


   let elegirEquipo = parseInt(prompt("elegi con numero que equipo seleccionas"));

   if(elegirEquipo>3){
      alert("ingresa un valor valido, solo hay 3 equipos");
   }


   if (elegirEquipo === 1){
      alert("tu equipo es river");
      console.log("ataque: 80, defensa: 75");
   }

   if(elegirEquipo === 2){
      alert("tu equipo es real madrid");
      console.log("ataque: 92, defensa: 90")
   }

   if(elegirEquipo=== 3){
      alert("tu equipo es el milan");
      console.log("ataque:85, defensa:80")
   }
   
}

elegirEquipo();

