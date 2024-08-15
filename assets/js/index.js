import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

document.addEventListener("DOMContentLoaded", () => {
    const formularioAnimales = document.forms.animalesForm;
    formularioAnimales.addEventListener("submit", async (e) => {
        e.preventDefault();

        // nombre del animal
        const nombreAnimal = formularioAnimales.animal.value;
        // edad del animal
        const edadAnimal = formularioAnimales.edad.value;
        // comentarios respecto al animal
        const comentariosAnimal = formularioAnimales.comentarios.value;

        // Buscar imagen y sonido usando buscarAnimal
        const { imagen, sonido } = await buscarAnimal(nombreAnimal);

        // instancia de la clase
        let animal = null;

        switch (nombreAnimal) {
            case "Leon":
                animal = new Leon(nombreAnimal, edadAnimal, imagen, comentariosAnimal, sonido);
                break;
            case "Lobo":
                animal = new Lobo(nombreAnimal, edadAnimal, imagen, comentariosAnimal, sonido);
                break;
            case "Oso":
                animal = new Oso(nombreAnimal, edadAnimal, imagen, comentariosAnimal, sonido);
                break;
            case "Serpiente":
                animal = new Serpiente(nombreAnimal, edadAnimal, imagen, comentariosAnimal, sonido);
                break;
            case "Aguila":
                animal = new Aguila(nombreAnimal, edadAnimal, imagen, comentariosAnimal, sonido);
                break;
            default:
                alert("Animal no encontrado");
        }

        console.log(animal);
    });


    const buscarAnimal = async (nombreAnimal) => {
        try {
            const response = await fetch('../../animales.json');
            const data = await response.json();
            const animalEncontrado = data.animales.find(animal => animal.name === nombreAnimal);

            if (animalEncontrado) {
                return {
                    imagen: animalEncontrado.imagen,
                    sonido: animalEncontrado.sonido
                };
            } else {
                return "Animal no encontrado";
            }
        } catch (error) {
            return "Error al buscar el animal:", error;
        }
    }
});


