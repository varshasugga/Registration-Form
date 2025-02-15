//Fetch API
async function FetchProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();
        console.log(products)
        let productContainer = document.getElementById('product-list');
        productContainer.innerHTML = "";
        products.forEach(product => {
            let productCard = `
            <div>
            <img src="${product.image}" width="100">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            </div>
            `;
            productContainer.innerHTML += productCard;
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }

    
}
FetchProducts();