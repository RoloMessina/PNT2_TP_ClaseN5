async function mostrarComentarios() {
    try {
        // Hacer la solicitud a la API para obtener los comentarios del post con ID 2
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=2');
        const comments = await response.json();

        // Obtener el contenedor del accordion
        const accordionContainer = document.getElementById('comentarios-accordion');

        // Generar dinámicamente el accordion con los comentarios
        comments.forEach((comment, index) => {
            const accordionItem = `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${index}">
                            Comentario de: ${comment.name}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#comentarios-accordion">
                        <div class="accordion-body">
                            <p><strong>Email:</strong> ${comment.email}</p>
                            <p>${comment.body}</p>
                        </div>
                    </div>
                </div>
            `;
            // Insertar el acordeón generado en el contenedor
            accordionContainer.innerHTML += accordionItem;
        });

    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
    }
}

// Llamar a la función para mostrar los comentarios
mostrarComentarios();
