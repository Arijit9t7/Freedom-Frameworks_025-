var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".categorySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        412:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        1024:{
            slidesPerView:4,
        }
        
    }
});





const products = [
    { id: 1, name: "ULLA JOHNSON", description: "Asilia Long Sleeve Maxi Dress In Pristine", price: "$39.99", image: "/Freedom-Frameworks_025-/Modesons/images/product1.jpg" },
    { id: 2, name: "CINQ A SEPT", description: "Cinq A Sept Siv Denim Belted Mini Dress In Indigo", price: "$39.99", image: "/Freedom-Frameworks_025-/Modesons/images/product2.jpg" },
    { id: 3, name: "FRAME", description: "Danube Denim In Danube Medium Indigo Wash", price: "$49.99", image: "/Freedom-Frameworks_025-/Modesons/images/product3.jpg" },
    { id: 4, name: "VERONICA BEARD", description: "Magnolia Two-tone Sunburst Knit Midi Dress In Gild", price: "$59.99", image: "/Freedom-Frameworks_025-/Modesons/images/product4.jpg" },
    { id: 5, name: "ULLA JOHNSON", description: "Frankie Pattern Short Sleeve Crop Sweater In Confetti", price: "$69.99", image: "/Freedom-Frameworks_025-/Modesons/images/product5.jpg" },
    { id: 6, name: "ACNE STUDIOS", description: "Logo Printed Crewneck Pattern  T Shirt In Pink", price: "$79.99", image: "/Freedom-Frameworks_025-/Modesons/images/product6.jpg" },
    { id: 7, name: "VERONICA BEARD", description: "Dali Leather Platform Slide Sandals In Beige", price: "$89.99", image: "/Freedom-Frameworks_025-/Modesons/images/product7.jpg" },
    { id: 8, name: "BALMAIN", description: "Monogram Jacquard Dress In Ggd White/ Navy", price: "$99.99", image: "/Freedom-Frameworks_025-/Modesons/images/product8.jpg" },
];

let productsDisplayed = 4;

function renderProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear existing products

    for (let i = 0; i < productsDisplayed; i++) {
        if (i >= products.length) break; // Prevent out of bounds

        const product = products[i];
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="image-box">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button>Add to Cart</button>
        `;

        productContainer.appendChild(productCard);
    }
}

document.getElementById('viewBtn').addEventListener('click', () => {
    productsDisplayed += 4;
    renderProducts();

    if (productsDisplayed >= products.length) {
        document.getElementById('viewBtn').style.display = 'none';
    }
});

// Initial render
renderProducts();