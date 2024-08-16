export const mostrarPreview = (imagen) => {
    const imgHtml = document.createElement('img');
    imgHtml.className = 'img-fluid';
    imgHtml.src = `${imagen}`;
    document.getElementById('preview').append(imgHtml);
};

export const mostrarEnInvestigacion = (imagen, sonido, nombreAnimal) => {
    let containerAnimales = document.getElementById('Animales');
    containerAnimales.innerHTML += `
        <div class="card h-100 mx-2" style="width: 18rem;">
            <img src="${imagen}" class="card-img-top img-fluid" alt="${nombreAnimal} en investigación">
            <div class="card-body">
                <audio controls style="max-width: 100%"> <source src="${sonido}" type="audio/mpeg">Reproducir sonido</audio>
            </div>
        </div>
    `;
};

// Función para devolver el formulario en un estado inicial
export const estadoInicial = (formularioAnimales) => {
    setTimeout(() => {
        formularioAnimales.reset();
        document.getElementById('preview').innerHTML = '';
    }, 1500);
};

