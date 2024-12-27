import { animate } from "motion";

document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title-juan-sotelo");

    // Aplicar la animación al título
    animate(title, { scale: [0.8, 1.1] }, { ease: "circInOut", duration: 1 });
});
