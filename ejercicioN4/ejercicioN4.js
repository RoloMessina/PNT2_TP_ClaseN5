async function mostrarUsuario() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
        const user = await response.json();


        const usuarioInfo = document.getElementById('usuario-info');


        const card = `
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Nombre: ${user.name}</h5>
                        <p class="card-text">Email: ${user.email}</p>
                        <p class="card-text">Dirección: ${user.address.street}, ${user.address.city}</p>
                        <p class="card-text">Teléfono: ${user.phone}</p>
                        <p class="card-text">Compañía: ${user.company.name}</p>
                    </div>
                </div>
            </div>
        `;


        usuarioInfo.innerHTML = card;

    } catch (error) {
        console.error('Error:', error);
    }
}


mostrarUsuario();
