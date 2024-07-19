document.addEventListener('DOMContentLoaded', () => {
    fetch('https://modesense-data.onrender.com/womenproducts') 
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products');
            data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.innerHTML = `
                    <img src="${product.Imagelink}" alt="${product.title}">
                    <div class="product-details">
                        <h2>${product.title}</h2>
                        <p>${product.desc}</p>
                        <p>₹${product.price} (${product.price / 10}%) to ₹${product.oldprice}</p>
                        <a href="#">Compare ${product.stores} stores</a>
                    </div>
                `;
                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));

    const dropdowns = document.getElementsByClassName("dropdown-btn");

    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    const categorySelect = document.getElementById("category-select");
    const sortSelect = document.getElementById("sort-select");

    categorySelect.addEventListener("change", function() {
        const selectedCategory = categorySelect.value;
        console.log("Selected category: " + selectedCategory);
        filterProducts(selectedCategory);
    });

    sortSelect.addEventListener("change", function() {
        const selectedSort = sortSelect.value;
        console.log("Selected sort: " + selectedSort);
        sortProducts(selectedSort);
    });

    function filterProducts(selectedCategory) {
        const products = document.getElementsByClassName("product");
        for (let i = 0; i < products.length; i++) {
            if (selectedCategory === "all" || products[i].classList.contains(selectedCategory)) {
                products[i].style.display = "block";
            } else {
                products[i].style.display = "none";
            }
        }
    }

    function sortProducts(selectedSort) {
        const products = Array.from(document.getElementsByClassName("product"));
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.product-details p').textContent.split('₹')[1].replace(',', ''));
            const priceB = parseFloat(b.querySelector('.product-details p').textContent.split('₹')[1].replace(',', ''));
            return selectedSort === "high-to-low" ? priceB - priceA : priceA - priceB;
        });
        const productsContainer = document.getElementById("products");
        productsContainer.innerHTML = "";
        products.forEach(product => {
            productsContainer.appendChild(product);
        });
    }

    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const products = document.getElementsByClassName('product');
        Array.from(products).forEach(product => {
            const title = product.querySelector('.product-details h2').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
