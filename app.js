$(document).ready(function () {
    // Variable para almacenar el último registro procesado
    let ultimoRegistroProcesado = null;

    // Función para obtener y mostrar los últimos registros de MockAPI
    function obtenerUltimosRegistros() {
        $.getJSON('https://66301ce6c92f351c03d911f0.mockapi.io/casa', function (data) {
            // Verificar si hay nuevos registros
            if (data.length > 0 && JSON.stringify(data[data.length - 1]) !== JSON.stringify(ultimoRegistroProcesado)) {
                // Almacenar el último registro como el último procesado
                ultimoRegistroProcesado = data[data.length - 1];

                // Limpiar el contenido anterior de la lista desordenada
                $('#ultimaOrdenLista').empty();

                // Obtener los últimos registros y agregarlos al HTML
                /* let order;
                for (var i = data.length - 3; i < data.length; i++) {
                    order = data[i];
                    $('#ultimaOrdenLista').append('<li>' + order.accion + ' - ' + order.fecha + '</li>');
                } */
                // Procesar la nueva orden
                ordenes(ultimoRegistroProcesado.orden);
            }
        });
    }

    const focoRoom = document.getElementById("focoRoom");
    const focoSala = document.getElementById("focoSala");
    const focosJardin = document.querySelectorAll(".focoJardin");
    const ventiladorImg = document.getElementById("ventiladorImg");
    const cortinas = document.getElementById("cortinasImg");

    const camaraImg = document.getElementById("camaraImg");
    const camaraSonido = document.getElementById("camara-sonido");

    const alarmaImg = document.getElementById("alarmaImg");
    const alarmaSonido = document.getElementById("alarma-sonido");
    alarmaSonido.loop=true
    


   /* const openCurtains = () => {
        // Cambiar el src a la versión animada del GIF
        cortinas.src = 'img/Abre las cortinas.jpg';
    
        // Después de un tiempo, revertir el src a la versión estática
        setTimeout(() => {
            cortinas.src = 'img/Cierra las cortinas.jpg';
        }, 543); // Cambia 5000 por el tiempo de duración del GIF en milisegundos
    }
    
    const closeCurtains = () => {
        // Cambiar el src a la versión animada del GIF
        cortinas.src = 'img/cortinas_cerrar1.gif';
    
        // Después de un tiempo, revertir el src a la versión estática
        setTimeout(() => {
            cortinas.src = 'img/cortinas_cerradas.png';
        }, 1000); // Cambia 5000 por el tiempo de duración del GIF en milisegundos
    }*/

    const ordenes = (orden) => {
        console.log(orden)

        // Aquí puedes agregar el código para abrir Google en una nueva pestaña
        if (orden === "Se abren las cortinas") {
            cortinas.setAttribute('src', 'img/Abre las cortinas.jpg');
        }
        if (orden === 'Se cierra las cortinas') {
            cortinas.setAttribute('src', 'img/cortinas_cerradas.png');
        }


    const ordenes = (orden) => {
        console.log(orden)

        // Aquí puedes agregar el código para abrir Google en una nueva pestaña
        if (orden === "Se encendió la luz de la recámara") {
            focoRoom.setAttribute('src', 'img/Enciende la luz de la habitación.jpg');
        }
        if (orden === 'Se apagó la luz de la recámara') {
            focoRoom.setAttribute('src', 'img/Apaga la luz de la habitación.jpg');
        }

        // Aquí puedes agregar el código para abrir Google en una nueva pestaña
        if (orden === "Se encendió la luz de la sala") {
            focoSala.setAttribute('src', 'img/Enciende la luz de la sala.jpg');
        }
        if (orden === 'Se apagó la luz de la sala') {
            focoSala.setAttribute('src', 'img/Apaga la luz de la sala.jpg');
        }

        // Aquí puedes agregar el código para abrir Google en una nueva pestaña
        if (orden === "Se encendieron las luces del jardín") {
            focosJardin.forEach(function(elemento) {
                // Cambiar la propiedad src
                elemento.setAttribute('src', 'img/Enciende las luces del jardín.jpg');
            });
        }
        if (orden === 'Se apagaron las luces del jardín') {
            focosJardin.forEach(function(elemento) {
                // Cambiar la propiedad src
                elemento.setAttribute('src', 'img/Apaga las luces del jardín.jpg');
            });
        }
        // Aquí puedes agregar el código para abrir Ventilador 
        if (orden === "Se encendió el ventilador") {
            ventiladorImg.setAttribute('src', 'img/Enciende el ventilador.jpg');
        }
        if (orden === 'Se apagó el ventilador') {
            ventiladorImg.setAttribute('src', 'img/Apaga el ventilador.jpg');
        }
        // Aquí puedes agregar el código para abrir Cortinas
        if (orden === "Se abrieron las cortinas") {
           openCurtains()
        }
        if (orden === 'Se cerraron las cortinas') {
            closeCurtains()
        }



        // Aquí puedes agregar el código para abrir la alarma de la casa en una nueva pestaña
        if (orden === "Se activó la alarma de la casa") {
            alarmaImg.setAttribute('src', 'img/Activa la alarma de la casa.jpg');
            alarmaSonido.play()
        }
        if (orden === 'Se desactivó la alarma de la casa') {
            alarmaImg.setAttribute('src', 'img/Desactiva la alarma de la casa.jpg');
            alarmaSonido.pause() 
       }



        // Aquí puedes agregar el código para abrir la alarma de la casa en una nueva pestaña
        if (orden === "Se encendieron las cámaras de seguridad") {
            camaraImg.setAttribute('src', 'img/Enciende las cámaras de seguridad.jpg');
            camaraSonido.play()
        }
        if (orden === 'Se apagaron las cámaras de seguridad') {
            camaraImg.setAttribute('src', 'img/Apaga las cámaras de seguridad.jpg');
            camaraSonido.play()
        }



        if (orden === 'se abrio una nueva pestaña y cerro en 3 segundos') {
            const ventana = window.open('');
            // Cerrar la ventana después de 3 segundos
            setTimeout(function () {
                ventana.close();
            }, 3000);

        }
    }

    // Llamar a la función para obtener los últimos registros cada cierto tiempo
    setInterval(obtenerUltimosRegistros, 4000);

    }    
}
);



