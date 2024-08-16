// Función para validar los campos vacíos del formulario
export const validaCampos = async (nombreAnimal, edadAnimal, comentariosAnimal) => {
    if (nombreAnimal.trim() === '' || edadAnimal.trim() === '' || comentariosAnimal.trim() === '') {
        alert("Por favor, complete todos los campos antes de registrar al animal");
        return false;
    }
    return true;
}