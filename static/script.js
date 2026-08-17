function abrirCarta() {

    const inicio = document.getElementById("inicio");
    const carta = document.getElementById("carta");

    inicio.style.opacity = "0";
    inicio.style.transform = "scale(1.2)";

    setTimeout(() => {

        inicio.style.display = "none";

        carta.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);
}