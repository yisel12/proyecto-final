const categories = [
    {
        name: "Deportes de Pelota",
        image: "../img/balones.jpg",
        products: generateProducts(50)
    },
    {
        name: "Deportes de Raqueta",
        image: "../img/raqueta.jpg",
        products: generateProducts(50)
    },
    {
        name: "Entrenamiento y Fitness",
        image: "../img/entrenamiento.jpg",
        products: generateProducts(50)
    },
    {
        name: "Deportes de Ciclismo",
        image: "../img/ciclismo.jpeg",
        products: generateProducts(50)
    },
    {
        name: "Protección Deportiva",
        image: "../img/proteccion.jpg",
        products: generateProducts(50)
    },
    {
        name: "Deportes Acuáticos",
        image: "../img/acuatico.jpg",
        products: generateProducts(50)
    },
    {
        name: "Deportes de Combate",
        image: "../img/combate.jpg",
        products: generateProducts(50)
    },
    {
        name: "Patinaje",
        image: "../img/patinaje.jpg",
        products: generateProducts(50)
    },
    {
        name: "Golf",
        image: "../img/golf.jpg",
        products: generateProducts(50)
    },
    {
        name: "Ropa y Calzado Deportivo",
        image: "../img/ropa.png",
        products: generateProducts(50)
    },
    {
        name: "Accesorios Generales",
        image: "../img/generales.jpg",
        products: generateProducts(50)
    }
];

// Función para generar productos de manera dinámica
function generateProducts(number) {
    let products = [];
    for (let i = 1; i <= number; i++) {
        products.push({
            name: `Producto ${i}`,
            link: "compras.html"
        });
    }
    return products;
}


// Función de búsqueda de productos
function searchProducts() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase(); // Obtener el término de búsqueda y convertirlo a minúsculas
    const products = JSON.parse(localStorage.getItem("products")) || []; // Recuperar los productos de localStorage
    const searchResults = document.getElementById("searchResults");

    // Filtrar los productos que coinciden con la búsqueda
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchQuery); // Compara el nombre del producto con la búsqueda
    });

    // Mostrar los productos filtrados
    searchResults.innerHTML = ""; // Limpiar resultados anteriores
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-item");
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Categoría: ${product.category}</p>
                <p>Precio: $${product.price}</p>
                <p>Descripción: ${product.description}</p>
                <img src="${product.image}" alt="${product.name}" style="width: 100px;">
            `;
            searchResults.appendChild(productDiv);
        });
    } else {
        searchResults.innerHTML = "<p>No se encontraron productos que coincidan con la búsqueda.</p>";
    }
}