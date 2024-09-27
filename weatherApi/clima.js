
async function obtenerClima(ciudad) {
    const apiKey = 'b776a52b7f1c0e5f7fff73478409c0c7'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ciudad no encontrada');
        }
        const data = await response.json();
        mostrarClima(data);
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
        mostrarError('No se pudo obtener el clima. Verifica el nombre de la ciudad.');
    }
}


function mostrarClima(data) {
    const climaInfo = document.getElementById('clima-info');
    climaInfo.innerHTML = ''; 

    const iconoClima = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const card = `
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body text-center">
                    <h5 class="card-title">Clima en ${data.name}, ${data.sys.country}</h5>
                    <img src="${iconoClima}" alt="Icono del clima" class="mb-3">
                    <p class="card-text">Temperatura: ${data.main.temp}°C</p>
                    <p class="card-text">Humedad: ${data.main.humidity}%</p>
                    <p class="card-text">Condiciones: ${data.weather[0].description}</p>
                </div>
            </div>
        </div>
    `;

    climaInfo.innerHTML = card;
}


function mostrarError(mensaje) {
    const climaInfo = document.getElementById('clima-info');
    climaInfo.innerHTML = `
        <div class="col-md-6 offset-md-3">
            <div class="alert alert-danger text-center">${mensaje}</div>
        </div>
    `;
}


document.getElementById('buscar-clima').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudad').value;
    if (ciudad) {
        obtenerClima(ciudad);
    } else {
        mostrarError('Por favor, ingresa el nombre de una ciudad.');
    }
});
