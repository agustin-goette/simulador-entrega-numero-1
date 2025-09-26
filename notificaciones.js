document.getElementById("registrar").addEventListener("click", () => {
    Swal.fire({
        title: "Usuario registrado",
        icon: "success",
        draggable: true
    });
});

document.addEventListener("click", function (confirmar) {
    if (confirmar.target && confirmar.target.classList.contains("boton-elegir")) {
        const equipoNombre = confirmar.target.dataset.equipo;

        Swal.fire({
            title: `Estas seguro de elegir a ${equipoNombre}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, elegir',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                elegirEquipo(equipoNombre);

                Swal.fire({
                    icon: 'success',
                    title: 'Equipo elegido!',
                    text: `${equipoNombre} sera tu equipo.`
                });
            }
        });
    }
});