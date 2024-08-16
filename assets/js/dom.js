import { buscarAnimal } from "./api.js";

// Función para desplegar la imagen del animal en el preview
export const mostrarPreview = () => {
    const selAnimal = document.getElementById('animal');
    const previewContainer = document.getElementById('preview');

    selAnimal.addEventListener("change", async () => {
        const nombreAnimal = selAnimal.value;

        // Llamar a la API para buscar la imagen en función del animal seleccionado
        const { imagen } = await buscarAnimal(nombreAnimal);
        const rutaBaseImg = "assets/imgs/";
        const imgSrc = rutaBaseImg + imagen;

        // Limpiar el contenedor de vista previa
        previewContainer.innerHTML = '';

        // Crear y agregar la nueva imagen
        const imgHtml = document.createElement('img');
        imgHtml.className = 'img-fluid object-fit-contain';
        imgHtml.src = imgSrc;
        previewContainer.append(imgHtml);
    });
};

// Función para mostrar el animal seleccionado en el área de investigación
export const mostrarEnInvestigacion = (arrayAnimales) => {
    let containerAnimales = document.getElementById('Animales');
    containerAnimales.innerHTML = '';

    arrayAnimales.forEach((animal, index) => { // Agregar el index en el forEach
        containerAnimales.innerHTML += `
        <div class="card mx-2" style="width: 18rem;">
            <img src="${animal.Img}" class="card-animal card-img-top img-fluid" alt="${animal.Nombre} en investigación" style="height: 200px; object-fit: cover; object-position: 0 0">
            <div class="card-body">
                <audio controls style="max-width: 100%"> <source src="${animal.Sonido}" type="audio/mpeg">Reproducir sonido</audio>
                <button class="btnMostrarModal btn btn-dark" value="${index}" data-bs-toggle="modal" data-bs-target="#animalModal">Ver más</button>
            </div>
        </div>
    `;
    });

    // Agregar event listeners a los botones después de que se hayan creado en el DOM
    const btnsModal = document.querySelectorAll('.btnMostrarModal');
    btnsModal.forEach((btn) => {
        btn.addEventListener("click", () => {
            const idAnimal = btn.value;
            mostrarModal(arrayAnimales, idAnimal);
        });
    });
};

// Función para mostrar el modal de un animal seleccionado
export const mostrarModal = (arrayAnimales, idAnimal) => {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = '';

    // Convertir idAnimal a entero (por si llega como string)
    const indexAnimal = parseInt(idAnimal);
    const animal = arrayAnimales[indexAnimal];

    modalBody.innerHTML += `
            <div class="row">
                <div class="col-md-6">
                    <img src="${animal.Img}" class="img-fluid" alt="${animal.Nombre}" style="height: 200px; object-fit: cover;">
                </div>
                <div class="col-md-6">
                    <h2>${animal.Nombre}</h2>
                    <p>Edad: ${animal.Edad}</p>
                    <p>Comentarios: ${animal.Comentarios}</p>
                </div>
            </div>
        `;
};

// Función para devolver el formulario en un estado inicial
export const estadoInicial = (formularioAnimales) => {
    setTimeout(() => {
        formularioAnimales.reset();
        document.getElementById('preview').innerHTML = '';
    }, 500);
};




