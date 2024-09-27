async function obtenerClima(ciudad) {
    const apiKey = 'b776a52b7f1c0e5f7fff73478409c0c7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        
        const iconMap = {
            'clear': 'bi-brightness-high-fill', // Soleado
            'clouds': 'bi-cloud-fill',          // Nublado
            'rain': 'bi-cloud-drizzle-fill',    // Lluvia ligera
            'thunderstorm': 'bi-cloud-lightning-fill', // Tormenta
            'snow': 'bi-snow',                  // Nieve
            'mist': 'bi-cloud-fog',             // Niebla
        };

        const mainWeather = data.weather[0].main.toLowerCase();
        const weatherIcon = iconMap[mainWeather] || 'bi-cloud'; 

        const card = `
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">Clima en ${data.name}, ${data.sys.country}</h5>
                        <i class="bi ${weatherIcon}" style="font-size: 48px;"></i>
                        <p class="card-text">Temperatura: ${data.main.temp}°C</p>
                        <p class="card-text">Clima: ${data.weather[0].description}</p>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('clima-info').innerHTML = card;

    } catch (error) {
        console.error('Error al obtener los datos del clima', error);
        mostrarAlerta('Error al obtener los datos del clima', 'danger');
    }
}

function mostrarAlerta(mensaje, tipo) {
    const climaInfo = document.getElementById('clima-info');
    const alerta = `<div class="alert alert-${tipo}">${mensaje}</div>`;
    climaInfo.innerHTML = alerta;
}

document.getElementById('buscar-clima').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudad').value;
    if (ciudad) {
        obtenerClima(ciudad);
    } else {
        mostrarAlerta('Por favor, ingresa el nombre de una ciudad', 'warning');
    }
});
