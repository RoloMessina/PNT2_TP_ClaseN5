
async function obtenerRazas() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const razas = data.message;
        const selectRaza = document.getElementById('raza-perro');

     
        for (const raza in razas) {
            const option = document.createElement('option');
            option.value = raza;
            option.textContent = raza.charAt(0).toUpperCase() + raza.slice(1);
            selectRaza.appendChild(option);
        }
    } catch (error) {
        console.error('Error al obtener las razas:', error);
    }
}


async function obtenerImagenesPorRaza(raza) {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${raza}/images/random/6`);
        const data = await response.json();
        const imagenes = data.message;
        
        mostrarImagenes(imagenes);
    } catch (error) {
        console.error('Error al obtener las imágenes:', error);
    }
}


function mostrarImagenes(imagenes) {
    const galeria = document.getElementById('galeria-imagenes');
    galeria.innerHTML = ''; 

    imagenes.forEach(imagen => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4');

        const card = `
            <div class="card">
                <img src="${imagen}" class="card-img-top" alt="Imagen de perro">
                <div class="card-body text-center">
                    <a href="${imagen}" download class="btn btn-primary">Descargar</a>
                </div>
            </div>
        `;

        col.innerHTML = card;
        galeria.appendChild(col);
    });
}


document.getElementById('raza-perro').addEventListener('change', (event) => {
    const razaSeleccionada = event.target.value;
    if (razaSeleccionada) {
        obtenerImagenesPorRaza(razaSeleccionada);
    }
});


obtenerRazas();
