function eliminarPost() {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {

            mostrarAlerta('Post eliminado con éxito', 'success');
        })
        .catch(error => {

            mostrarAlerta('Error al eliminar el post', 'danger');
        });
}

function mostrarAlerta(mensaje, tipo) {

    const alerta = document.getElementById('resultado-alerta');

    alerta.className = `alert alert-${tipo}`;

    alerta.textContent = mensaje;

    alerta.classList.remove('d-none');
}


document.getElementById('eliminar-post').addEventListener('click', eliminarPost);
