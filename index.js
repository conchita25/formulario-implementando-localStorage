const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");
const lista = document.getElementById("lista");

let estudiantes =JSON.parse(localStorage.getItem("estudiantes")) || [];

        formulario.addEventListener("submit", function(event) {
             event.preventDefault();
             
            const estudiante = {
            nombre: nombre.value,
            correo: correo.value,
            edad: edad.value
            };

            estudiantes.push(estudiante);

            localStorage.setItem(
                "estudiantes",
                JSON.stringify(estudiantes)
            );

            mostrarEstudiantes();

            formulario.reset();

            alert("Estudiante registrado correctamente");
        });

        function mostrarEstudiantes() {

            lista.innerHTML = "";

            estudiantes.forEach(function(estudiante, indice) {

                const div = document.createElement("div");

                const parrafo = document.createElement("p");

                parrafo.textContent =
                    "Nombre: " + estudiante.nombre +
                    " | Correo: " + estudiante.correo +
                    " | Edad: " + estudiante.edad;

                const boton = document.createElement("button");

                boton.textContent = "Eliminar";

                boton.addEventListener("click", function() {

                    eliminarEstudiante(indice);

                });

                div.appendChild(parrafo);
                div.appendChild(boton);

                lista.appendChild(div);
            });
        }

        function eliminarEstudiante(indice) {estudiantes.splice(indice, 1);
            localStorage.setItem("estudiantes",JSON.stringify(estudiantes)
            );
            
            mostrarEstudiantes();
        }

        mostrarEstudiantes();