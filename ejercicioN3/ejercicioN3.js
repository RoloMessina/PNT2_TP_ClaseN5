async function listarAlbumes() {
    try {

        const response = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=1');
        

        const albumes = response.data;


        const contenedor = document.getElementById('albumes-container');

        
        albumes.forEach(album => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');
            
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${album.title}</h5>
                    </div>
                </div>
            `;

            contenedor.appendChild(card);
        });

    } catch (error) {
        console.error('Error:', error);
    }
}


listarAlbumes();
