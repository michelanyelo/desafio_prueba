// Función para desplegar la imagen del animal en el preview
export const mostrarPreview = (imagen) => {
    const imgHtml = document.createElement('img');
    imgHtml.className = 'img-fluid object-fit-contain';
    imgHtml.src = `${imagen}`;
    document.getElementById('preview').append(imgHtml);
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
                <button class="btnMostrarModal btn btn-primary" value="${index}" data-bs-toggle="modal" data-bs-target="#animalModal">Ver más</button>
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


// Función para devolver el formulario en un estado inicial
export const estadoInicial = (formularioAnimales) => {
    setTimeout(() => {
        formularioAnimales.reset();
        document.getElementById('preview').innerHTML = '';
    }, 1500);
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
                    <p>${animal.Comentarios}</p>
                </div>
            </div>
        `;
};



