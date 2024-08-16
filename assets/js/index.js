import { crearAnimal } from "./instancia.js";
import { mostrarPreview, mostrarEnInvestigacion } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {

    const formularioAnimales = document.forms.animalesForm;

    formularioAnimales.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombreAnimal = formularioAnimales.animal.value;
        const edadAnimal = formularioAnimales.edad.value;
        const comentariosAnimal = formularioAnimales.comentarios.value;
        const animal = await crearAnimal(nombreAnimal, edadAnimal, comentariosAnimal);

        if (animal) {
            mostrarPreview(animal.Img);
            mostrarEnInvestigacion(animal.Img, animal.Sonido, nombreAnimal);

            setTimeout(() => {
                formularioAnimales.reset();
                document.getElementById('preview').innerHTML = '';
            }, 1000);
        }
    });
});
