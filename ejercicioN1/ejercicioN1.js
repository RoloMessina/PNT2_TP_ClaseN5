async function mostrarPersonajes() {
    
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const personajes = data.results.slice(0, 10);

    const listaPersonajes = document.getElementById('lista-personajes');

    personajes.forEach(personaje => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = personaje.name; 
        listaPersonajes.appendChild(li);
    });
}

mostrarPersonajes();
