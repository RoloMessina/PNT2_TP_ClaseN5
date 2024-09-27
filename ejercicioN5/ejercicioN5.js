
function eliminarTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {

            mostrarAlerta('To-Do eliminado con éxito', 'success');
        })
        .catch(error => {

            mostrarAlerta('Error al eliminar el To-Do', 'danger');
        });
}


function mostrarAlerta(mensaje, tipo) {

    const alerta = document.getElementById('resultado-alerta');
    

    alerta.className = `alert alert-${tipo}`;
    

    alerta.textContent = mensaje;
    

    alerta.classList.remove('d-none');
}


document.getElementById('eliminar-todo').addEventListener('click', eliminarTodo);
