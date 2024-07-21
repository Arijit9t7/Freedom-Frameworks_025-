let baseUrl = `https://traveling-ubiquitous-study.glitch.me`;

let addToCartBtns = document.querySelectorAll(".addToCartBtn");

addToCartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Product added to cart");
        window.location.href = "./cart.html";
    });
});

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let container = document.getElementById("container");

let wishlistCards=document.getElementById("wishlist-cards")
let wishlistCard=document.getElementById("wishlist-card")
let cardTitle=document.getElementById("wishlist-card-title")
let cardDescription=document.getElementById("wishlist-card-description")
let cardPrice=document.getElementById("wishlist-card-price")
let cartBtn=document.getElementById("addToCartBtn")
let deleteBtn=document.getElementById("delete-Btn")

// fetch('https://modesense-data.onrender.com/menproducts')
//         .then(response => response.json())
//         .then(data => {
//             const productsContainer = document.getElementById('allProduct-container');
//             data.forEach(product => {
//                 const productElement = document.createElement('div');
//                 productElement.className = 'product';
//                 const productImage = document.createElement('div');
//                 productImage.className = 'product-image';
//                 const productDetails = document.createElement('div');
//                 productDetails.className = 'product-details';

//                 const productTitle = document.createElement('h2');
//                 productTitle.textContent = product.title;
//                 const productDesc = document.createElement('p');
//                 productDesc.textContent = product.desc;
//                 const productPrice = document.createElement('span');
//                 productPrice.textContent = ${product.price};
//                 const productOldPrice = document.createElement('span');
//                 productOldPrice.textContent = ${product.oldprice};

//                 let oldPrice = product.oldprice.replace(/₹|,/g, "").trim();
//                 let newPrice = product.price.replace(/₹|,/g, "").trim();
//                 let oldPriceNumber = Number(oldPrice);
//                 let newPriceNumber = Number(newPrice);
//                 let discountPercentage = Math.abs(Math.round((oldPriceNumber - newPriceNumber) / newPriceNumber * 100));
//                 const productDiscount = document.createElement('span');
//                 productDiscount.textContent = ${discountPercentage}% off;

//                 const productImageElement = document.createElement('img');
//                 productImageElement.src = product.Imagelink;

//                 productImage.appendChild(productImageElement);
//                 productDetails.append(productTitle, productDesc, productPrice, productOldPrice, productDiscount);

//                 productElement.append(productImage, productDetails);

//                 container.append(productElement);
//             });

//           });

// const showData = async () => {
//   let response = await fetch("https://modesense-data.onrender.com/menproducts");
//   let data = response.json();
//   console.log(data);
// };
