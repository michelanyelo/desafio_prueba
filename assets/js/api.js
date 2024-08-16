// Función IIFE para cargar los datos iniciales
const cargarDatosIniciales = (async () => {
    try {
        const response = await fetch('animales.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al cargar los datos iniciales:", error);
        throw error;
    }
})();

// Función para buscar un animal en los datos cargados
export const buscarAnimal = async (nombreAnimal) => {
    try {
        // Esperar a que se resuelva la IIFE que carga los datos
        const data = await cargarDatosIniciales;

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
        console.error("Error al buscar el animal:", error);
        throw error;
    }
};
