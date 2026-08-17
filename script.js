/* =========================================
   ELEMENTOS
========================================= */

const botonAbrir = document.getElementById("abrirCarta");
const botonVolver = document.getElementById("volver");

const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");

const explosion = document.getElementById("corazonesExplosion");


/* =========================================
   ABRIR CARTA
========================================= */

botonAbrir.addEventListener("click", function () {

    crearExplosion();

    inicio.style.opacity = "0";
    inicio.style.transform = "scale(1.15)";

    setTimeout(function () {

        inicio.style.display = "none";

        carta.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);

});


/* =========================================
   VOLVER AL INICIO
========================================= */

botonVolver.addEventListener("click", function () {

    carta.style.display = "none";

    inicio.style.display = "flex";

    setTimeout(function () {

        inicio.style.opacity = "1";
        inicio.style.transform = "scale(1)";

    }, 50);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   EXPLOSIÓN DE CORAZONES
========================================= */

function crearExplosion() {

    const cantidad = 25;

    for (let i = 0; i < cantidad; i++) {

        const corazon = document.createElement("span");

        corazon.classList.add("explosion-heart");

        const corazones = [
            "❤️",
            "💜",
            "💕",
            "💗",
            "💖"
        ];

        corazon.textContent =
            corazones[
                Math.floor(
                    Math.random() * corazones.length
                )
            ];


        const x =
            (Math.random() - 0.5) * 500;

        const y =
            (Math.random() - 0.5) * 500;


        corazon.style.setProperty(
            "--x",
            `${x}px`
        );

        corazon.style.setProperty(
            "--y",
            `${y}px`
        );


        corazon.style.left = "50%";
        corazon.style.top = "50%";


        explosion.appendChild(corazon);


        setTimeout(function () {

            corazon.remove();

        }, 1300);
    }
}


/* =========================================
   EFECTO DE TÍTULO
========================================= */

document.addEventListener(
    "mousemove",
    function (event) {

        const sobre =
            document.querySelector(".sobre");

        if (!sobre) return;

        const x =
            (event.clientX / window.innerWidth - 0.5) * 10;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 10;

        if (inicio.style.display !== "none") {

            sobre.style.transform =
                `perspective(1000px)
                 rotateY(${x}deg)
                 rotateX(${-y}deg)`;
        }
    }
);
