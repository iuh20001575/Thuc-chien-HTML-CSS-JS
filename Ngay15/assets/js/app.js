import products from "./Products.js";

const listProductElement = $('.list-product')[0];
const inputElement = $('.input')[0];

const listProduct = [];
const productItem = product => `  
    <div class="product-item">
        <div class="product-img">
            <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h6 class="product-name">${product.name}</h6>
            <p class="product-price">${product.price}</p>
        </div>
    </div>
`;

function getData() {
    setTimeout(() => {
        listProduct.push(...products);
        listProductElement.innerHTML = listProduct.map(productItem).join('');
    }, 2000);

    inputElement.addEventListener('keyup', e => {
        const value = e.target.value;
        listProductElement.innerHTML = listProduct
            .filter(product => 
                product.name.includes(value) || product.price.includes(value)
            )
            .map(productItem).join('');
    })
}

getData();
