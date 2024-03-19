const charsRegex = /^[a-zA-Z\s]+$/
const regex = /^[A-Z][a-z]*$/;

function validation (data) {
    const errors = {};
    if(!charsRegex.test(data.name)) errors.name = "No se permiten caracteres especiales en el nombre";
    if(!regex.test(data.name)) errors.name = "Colocar la primer letra en mayúscula y el resto en minúscula"
    if(!data.name) errors.name = "Campo requerido";
    if(data.surname.length > 20) errors.surname = "La longitud debe ser de 20 caracteres como máximo";
    if(!data.surname) errors.surname = "Campo requerido";
    if(!data.nationality) errors.nationality = "Se requiere asignar un país";
    if(!data.image) errors.image = "Campo requerido";
    if (!data.dob) errors.dob = "Se requiere ingresar la fecha de nacimiento";
    else {
        const dobDate = new Date(data.dob);
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 13);
        if (dobDate > minDate) {
            errors.dob = "El conductor no puede ser menor a 13 años";
        }
    }
    if(data.description.length < 3 || data.description.length > 200) errors.description = "Se permiten entre 3 y 200 caracteres";
    if(!data.description) errors.description = "Campo requerido";
    // if(data.teams.length === 0) errors.teams = "Campo requerido";

    return errors;
}

export default validation;