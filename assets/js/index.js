import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

document.addEventListener("DOMContentLoaded", () => {
    const formularioAnimales = document.forms.animalesForm;
    formularioAnimales.addEventListener("submit", (e) => {
        e.preventDefault();
        // nombre del animal
        const nombreAnimal = formularioAnimales.animal.value;
        // edad del animal
        const edadAnimal = formularioAnimales.edad.value;
        // comentarios respectos al animal
        const comentariosAnimal = formularioAnimales.comentarios.value;

        // sonido del animal
        // ruta base de sonidos
        const rutaSonido = "../sounds/";
        let sonidoAnimal = null;
        switch (nombreAnimal) {
            case "Leon":
                sonidoAnimal = rutaSonido + nombreAnimal + ".mp3";
                break;
            case "Lobo":
                sonidoAnimal = rutaSonido + nombreAnimal + ".mp3";
                break;
            case "Oso":
                sonidoAnimal = rutaSonido + nombreAnimal + ".mp3";
                break;
            case "Serpiente":
                sonidoAnimal = rutaSonido + nombreAnimal + ".mp3";
                break;
            case "Aguila":
                sonidoAnimal = rutaSonido + nombreAnimal + ".mp3";
                break;
            default:
                alert("Sonido no encontrado");
        }

        // imagen del animal
        // ruta base de imagen
        const rutaImg = "../imgs/";
        let imgAnimal = null;
        switch (nombreAnimal) {
            case "Leon":
                imgAnimal = rutaImg + nombreAnimal + ".png";
                break;
            case "Lobo":
                imgAnimal = rutaImg + nombreAnimal + ".jpg";
                break;
            case "Oso":
                imgAnimal = rutaImg + nombreAnimal + ".jpg";
                break;
            case "Serpiente":
                imgAnimal = rutaImg + nombreAnimal + ".png";
                break;
            case "Aguila":
                imgAnimal = rutaImg + nombreAnimal + ".jpg";
                break;
            default:
                alert("Animal no encontrado");
        }

        console.log(`El Nombre es: ${nombreAnimal}, la Edad es: ${edadAnimal}, su Imagen es: ${imgAnimal}, hay de Cometario: ${comentariosAnimal} y el Sonido que hace es: ${sonidoAnimal} `);

    });
    // Crear instancias de las clases
    const miLeon = new Leon("Simba", 5, "leon.png", "Rey de la selva", "Rugido.mp3");
    const miLobo = new Lobo("Colmillo", 3, "lobo.png", "Lobo solitario", "Aullido.mp3");
    const miOso = new Oso("Baloo", 7, "oso.png", "Oso amigable", "Gruñido.mp3");
    const miSerpiente = new Serpiente("Kaa", 2, "serpiente.png", "Serpiente sigilosa", "Siseo.mp3");
    const miAguila = new Aguila("Zazu", 4, "aguila.png", "Aguila sideral", "Chillido.mp3");

    // Llamar a los métodos específicos de cada instancia
    miLeon.Rugir();      // Imprimirá "Rugido.mp3"
    miLobo.Aullar();     // Imprimirá "Aullido.mp3"
    miOso.Grunir();      // Imprimirá "Grunhido.mp3"
    miSerpiente.Sisear(); // Imprimirá "Siseo.mp3"
    miAguila.Chillar();  // Imprimirá "Chillido.mp3"

    // Acceder a los getters
    console.log(miLeon.Nombre); // Imprimirá "Simba"
    console.log(miOso.Edad);    // Imprimirá 7

});

const autoejecutable = (() => {
    console.log("Estoy fuera de DOMContentLoaded");
})();
