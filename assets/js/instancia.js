import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.js";
import { buscarAnimal } from "./utilidades.js";

export const crearAnimal = async (nombreAnimal, edadAnimal, comentariosAnimal) => {
    let { imagen, sonido } = await buscarAnimal(nombreAnimal);

    const rutaBaseImg = "assets/imgs/";
    const rutaBaseSonido = "assets/sounds/";

    imagen = rutaBaseImg + imagen;
    sonido = rutaBaseSonido + sonido;

    let animal = null;
    switch (nombreAnimal) {
        case "Leon":
            animal = new Leon(nombreAnimal, edadAnimal, imagen, "", sonido);
            animal.Comentarios = comentariosAnimal;
            break;
        case "Lobo":
            animal = new Lobo(nombreAnimal, edadAnimal, imagen, "", sonido);
            animal.Comentarios = comentariosAnimal;
            break;
        case "Oso":
            animal = new Oso(nombreAnimal, edadAnimal, imagen, "", sonido);
            animal.Comentarios = comentariosAnimal;
            break;
        case "Serpiente":
            animal = new Serpiente(nombreAnimal, edadAnimal, imagen, "", sonido);
            animal.Comentarios = comentariosAnimal;
            break;
        case "Aguila":
            animal = new Aguila(nombreAnimal, edadAnimal, imagen, "", sonido);
            animal.Comentarios = comentariosAnimal;
            break;
        default:
            alert("Animal no encontrado");
    }

    return animal;
};
// Decidí asignar por separado el comentario para hacer uso del Setter según el UML
