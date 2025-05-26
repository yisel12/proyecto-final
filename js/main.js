// Variables para la paginación
let variacionpagi = 1;
const categories = 15;
let productos = [];

// Elementos del DOM
const Containerproduct = document.getElementById('category-container');
const prev = document.getElementById('pre-pagi');
const next = document.getElementById('sig-pagi');
const infoPage = document.getElementById('info-pagi');

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    // Cargar productos desde localStorage
    productos = getProducts();
    // Mostrar productos y configurar paginación
    actualizarProducts();

    // Configurar eventos para botones de paginación
    prev.addEventListener('click', goToPreviousPage);
    next.addEventListener('click', goToNextPage);
});

//Actualizar la visualización de productos según la página actual







// Actualizar la visualización de productos según la página actual
function actualizarProducts() {
    // Calcular índices para la página actual
    const startIndex = (variacionpagi - 1) * categories;
    const endIndex = startIndex + categories;
    const currentProducts = productos.slice(startIndex, endIndex);

    // Limpiar el contenedor de productos
    Containerproduct.innerHTML = '';

    // Generar HTML para cada producto
    currentProducts.forEach(productos => {
        const productCard = document.createElement('div');
        productCard.className = 'card';

        // Formatear precio con separador de miles
        const formattedPrice = formatCurrency(productos.precio);

        productCard.innerHTML = `
      <img src="${productos.imagen}" alt="${productos.nombre}" onerror="this.src='../img/placeholder.jpg'">
      <h3>${productos.nombre}</h3>
      <div class="product-details">
        <p>Categoría: ${productos.categoria}</p>
        <p>Precio: ${formatCurrency(productos.precio)}</p>
        <p>Codigo: ${productos.codigo}</p>
        <p>Marca: ${productos.marca}</p>
        <p>Color: ${productos.Color}</p>
      </div>
    `;

        Containerproduct.appendChild(productCard);
    });







    // Actualizar información de página y estado de botones
    updatePaginationControls();
}

// Ir a la página anterior
function goToPreviousPage() {
    if (variacionpagi > 1) {
        variacionpagi--;
        actualizarProducts();
    }
}

// Ir a la página siguiente
function goToNextPage() {
    const totalPages = Math.ceil(productos.length / categories);

    if (variacionpagi < totalPages) {
        variacionpagi++;
        actualizarProducts();
    }
}

// Actualizar controles de paginación
function updatePaginationControls() {
    const totalPages = Math.ceil(productos.length / categories);

    // Actualizar texto informativo
    infoPage.textContent = `Página ${variacionpagi} de ${totalPages}`;

    // Habilitar/deshabilitar botones según la página actual
    prev.disabled = variacionpagi === 1;
    next.disabled = variacionpagi === totalPages;

    // Añadir/quitar clase visual para botones deshabilitados
    if (prev.disabled) {
        prev.classList.add('disabled');
    } else {
        prev.classList.remove('disabled');
    }

    if (next.disabled) {
        next.classList.add('disabled');
    } else {
        next.classList.remove('disabled');
    }
}

// Formatear número como moneda (COP)
function formatCurrency(value) {
    return '$ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}


// Función para generar productos de manera dinámica
function generateProducts(number) {
    let productos = [];
    for (let i = 1; i <= number; i++) {
        productos.push({
            name: `Producto ${i}`,
            link: "compras.html"
        });
    }
    return productos;
}