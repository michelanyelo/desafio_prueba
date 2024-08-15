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

        // Ruta base de img y sonido
        const rutaBaseImg = "assets/imgs/";
        const rutaBaseSonido = "assets/sounds/";
        // Buscar imagen y sonido usando buscarAnimal
        let { imagen, sonido } = await buscarAnimal(nombreAnimal);

        imagen = rutaBaseImg + imagen;
        sonido = rutaBaseSonido + sonido;

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

        // Vista previa de la imagen
        const imgHtml = document.createElement('img');
        imgHtml.className = 'img-fluid';
        imgHtml.src = `${imagen}`;
        document.getElementById('preview').append(imgHtml);

        let containerAnimales = document.getElementById('Animales');
        containerAnimales.innerHTML += `
                    <div class="card h-100 mx-2" style="width: 18rem;">
            <img src="${imagen}" class="card-img-top img-fluid" alt="${nombreAnimal} en investigación">
            <div class="card-body">
                <audio controls style="max-width: 100%"> <source src="${sonido}" type="audio/mpeg">Reproducir sonido</audio>
            </div>
            </div>
        `;

        // Estado inicial del formulario
        setTimeout(() => {
            document.forms.animalesForm.reset();
            document.getElementById('preview').innerHTML = '';
        }, 1000);
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


