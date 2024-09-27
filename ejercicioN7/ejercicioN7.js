async function eliminarFoto() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/photos/1', {
            method: 'DELETE'
        });


        if (response.ok) {
            mostrarAlerta('Foto eliminada con éxito', 'info');
        } else {
            mostrarAlerta('Error al eliminar la foto', 'danger');
        }
    } catch (error) {

        mostrarAlerta('Hubo un problema al eliminar la foto', 'danger');
    }
}


function mostrarAlerta(mensaje, tipo) {

    const alerta = document.getElementById('resultado-alerta');
    

    alerta.className = `alert alert-${tipo}`;
    

    alerta.textContent = mensaje;
    

    alerta.classList.remove('d-none');
}


document.getElementById('eliminar-foto').addEventListener('click', eliminarFoto);
