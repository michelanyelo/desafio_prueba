export const buscarAnimal = async (nombreAnimal) => {
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