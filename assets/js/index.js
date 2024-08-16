import { crearAnimal } from "./instancia.js";
import { mostrarPreview, mostrarEnInvestigacion, estadoInicial } from "./dom.js";
import { validaCampos } from "./validacion.js";

document.addEventListener("DOMContentLoaded", () => {

    const formularioAnimales = document.forms.animalesForm;
    const arrayAnimales = [];
    window.arrayAnimales = arrayAnimales;

    formularioAnimales.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombreAnimal = formularioAnimales.animal.value;
        const edadAnimal = formularioAnimales.edad.value;
        const comentariosAnimal = formularioAnimales.comentarios.value;
        const esValido = await validaCampos(nombreAnimal, edadAnimal, comentariosAnimal);
        if (!esValido) {
            // Detener la ejecución si los campos no son válidos
            return;
        } else {
            const animal = await crearAnimal(nombreAnimal, edadAnimal, comentariosAnimal);
            arrayAnimales.push(animal);
            if (animal) {
                mostrarPreview(animal.Img);
                mostrarEnInvestigacion(arrayAnimales);
                estadoInicial(formularioAnimales);
            }
        }
    });
});
