
const wishlistBtn = document.querySelector(".wishlistBtn");

wishlistBtn.addEventListener("click", () => {

    alert("Product added to wishlist");
    

    window.location.href = "./wishlist.html";
});



// const wishlistBtn = document.getElementById("wishlistBtn");
// const womenURL = 'https://modesense-data.onrender.com/womenproducts';

// wishlistBtn.addEventListener("click",()=>{

//   fetch('womenURL')
//     .then(response => response.json())
//     .then(products => {
        
//         wishlistBtn.addEventListener("click", () => {
//             //let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//             const productExists = wishlist.some(item => item.id === id);

//             if (productExists) {
//                 alert("Product is already added to the wishlist.");
//             } else {
//                 // wishlist.push(product);
//                 localStorage.setItem('wishlist', JSON.stringify(wishlist));
//                 //console.log(product);

//                 window.location.href = "/Freedom-Frameworks_025-/Modesons/pages/wishlist/wishlist.html";
//             }
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching product data:', error);
//     });
// })

// // Fetch product data from the API


