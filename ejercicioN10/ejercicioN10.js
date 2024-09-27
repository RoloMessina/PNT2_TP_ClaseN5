
async function obtenerArticulos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const articulos = await response.json();
        

        mostrarArticulosEnCarousel(articulos);
    } catch (error) {
        console.error('Error al obtener los artículos:', error);
    }
}


function mostrarArticulosEnCarousel(articulos) {
    const carouselContent = document.getElementById('carousel-content');
    carouselContent.innerHTML = ''; 

    articulos.forEach((articulo, index) => {

        const isActive = index === 0 ? 'active' : '';
        

        const carouselItem = `
            <div class="carousel-item ${isActive}">
                <div class="d-block w-100" style="height: 300px; background-color: #f8f9fa; display: flex; justify-content: center; align-items: center;">
                    <h3>${articulo.title}</h3>
                </div>
            </div>
        `;
        

        carouselContent.innerHTML += carouselItem;
    });
}


obtenerArticulos();
