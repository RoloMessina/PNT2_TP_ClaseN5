
async function obtenerTareas() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=3');
        const tareas = await response.json();
        

        const tareasOrdenadas = tareas.sort((a, b) => a.completed - b.completed);


        mostrarTareas(tareasOrdenadas);
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
    }
}


function mostrarTareas(tareas) {
    const tablaTareas = document.getElementById('tabla-tareas');
    tablaTareas.innerHTML = ''; 

    tareas.forEach(tarea => {
        const fila = `
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.title}</td>
                <td>${tarea.completed ? 'Sí' : 'No'}</td>
            </tr>
        `;
        tablaTareas.innerHTML += fila;
    });
}


obtenerTareas();
