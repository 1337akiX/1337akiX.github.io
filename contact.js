let nombre_field;
let pass_field;
let nacimiento_field;
let color_field;
let edad_field;
let suscribe_field;
let contact_form;
let comentario_field;

document.addEventListener("DOMContentLoaded", (event) => {
    nombre_field = document.getElementById("campo-nombre");
    pass_field = document.getElementById("campo-pass");
    nacimiento_field = document.getElementById("campo-data");
    color_field = document.getElementById("campo-color");
    comentario_field = document.getElementById("campo-comentario");
    suscribe_field = document.getElementById("campo-sub");
    contact_form = document.getElementById("contact-form");

    suscribe_field.addEventListener("click", (event) => {
        if(event.target.checked){
            alert("TE ROBE");
        } else {
            alert("Nooooooooooooooo");
        }
    });

    contact_form.addEventListener("submit", (event) => {
        let send = true;

        // Validación de Nombre
        if (nombre_field.value.length <= 2 || nombre_field.value.length > 32) {
            send = false;
            nombre_field.style.border = "1px solid red";
        } else {
            nombre_field.style.border = "1px solid green";
        }

        // Validación de Fecha de Nacimiento
        if (nacimiento_field.value.trim() === "" || nacimiento_field.value.length !== 10) {
            send = false;
            nacimiento_field.style.border = "1px solid red";
        } else {
            let date = nacimiento_field.value.split("-");
            let year = parseInt(date[0]);
            let month = parseInt(date[1]);
            let day = parseInt(date[2]);

            if (isNaN(year) || isNaN(month) || isNaN(day)) {
                send = false;
                nacimiento_field.style.border = "1px solid red";
            } else {
                if (year <= 0 || year > 2025 || month <= 0 || month > 12 || day <= 0 || day > 31) {
                    send = false;
                    nacimiento_field.style.border = "1px solid red";
                } else {
                    nacimiento_field.style.border = "1px solid green";
                }
            }
        }

        // Validación de Comentario
        if (comentario_field.value.length < 5 || comentario_field.value.length > 255) {
            send = false;
            comentario_field.style.border = "1px solid red";
        }
		else{
			comentario_field.value.replace(/'/g, "\\'");
		}





        // Si hay errores, evitar el envío del formulario
        if (!send) {
            event.preventDefault();
        }
    });
});
