function alerta() {
    Swal.fire({
            title: "Pedida de Mano",
            color: "#000000",
            imageUrl: "./assets/miBoda.png",
            padding: "2em",
            background: "rgb(255, 255, 255)",
            backdrop: "rgba(6, 6, 6, 0.6)",
            timer: 4000,
            showConfirmButton: true,
            confirmButtonColor: "black",
            customClass:{
                popup: "mi-fuente"
            }
        });
        }
console.log("¡Bienvenido al quinto sol!");

window.scrollTo({top: 0, behavior: "smooth"})

alerta();