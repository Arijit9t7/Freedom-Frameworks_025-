
let baseUrl = `https://traveling-ubiquitous-study.glitch.me`;

let productImage = document.getElementById('product-image');
let productTitle = document.getElementById('product-title');
let productDescription = document.getElementById('product-desc');
let productPrice = document.getElementById('product-price');
let productOldPrice = document.getElementById('product-oldprice');
let productDiscount = document.getElementById('product-discount');
let productStore = document.getElementById('product-store');


let storedProduct = JSON.parse(localStorage.getItem('singleProduct'));
let isLoggedInUserData = JSON.parse(localStorage.getItem('isLoggedinUser'));


const fetchUserData = async () => {
  let response = await fetch(`${baseUrl}/users/${isLoggedInUserData.user.id}`);
  let data = await response.json();
  return data
}


productImage.src = storedProduct.Imagelink;
productTitle.textContent = storedProduct.title;
productDescription.textContent = storedProduct.desc;
productPrice.textContent = storedProduct.price;
productOldPrice.textContent = storedProduct.oldprice;
productStore.textContent = storedProduct.store;

let oldPrice = storedProduct.oldprice.replace(/₹|,/g, "").trim();
let newPrice = storedProduct.price.replace(/₹|,/g, "").trim();
let oldPriceNumber = Number(oldPrice);
let newPriceNumber = Number(newPrice);
let discountPercentage = Math.abs(
  Math.round(((oldPriceNumber - newPriceNumber) / newPriceNumber) * 100)
);
productDiscount.textContent = `(${discountPercentage}% off)`;

// -=-=-=-=-=-=-==-=-=-=-=-=-=-=-

let addToCartBtn = document.getElementById('addToCartBtn');

const handleAddToCart = async () => {

  let obj = {
    "id": storedProduct.id,
    "Imagelink": storedProduct.Imagelink,
    "title": storedProduct.title,
    "desc": storedProduct.desc,
    "oldprice": storedProduct.oldprice,
    "price": storedProduct.price,
    "stores": storedProduct.stores,
    "category": storedProduct.category,
    "quantity": 1
  }


  let userCartData = await fetchUserData()
  console.log(userCartData)

  await fetch(`${baseUrl}/users/${isLoggedInUserData.user.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cart: [...userCartData.cart, obj]
    })
  })

  // console.log(obj)


  // let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  // let product = JSON.parse(localStorage.getItem('singleProduct'));

  // let productExists = cartItems.find(item => item.id === product.id);

  // if (productExists) {
  //   cartItems = cartItems.map(item => {
  //     if (item.id === product.id) {
  //       item.quantity += 1;
  //     }
  //     return item;
  //   });
  // } else {
  //   product.quantity = 1;
  //   cartItems.push(product);
  // }

  // localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // alert('Product added to cart');

  // {
  //   "id": "78679",
  //   "Imagelink": "https://m.media-amazon.com/images/I/31Tv84BGrAL._AC_UL480_FMwebp_QL65_.jpg",
  //   "title": "MONCLER",
  //   "desc": "Kids' Logo-patch Ruffled Polo Dress In Pastel Pink",
  //   "oldprice": "20500",
  //   "price": "₹19344",
  //   "stores": "Compare 2 stores",
  //   "category": "kidsproducts"
  // },

}

addToCartBtn.addEventListener('click', handleAddToCart);

let whishlistBtn = document.getElementById('whishlistBtn');

const handleAddToWhishlist = async () => {

  let obj = {
    "id": storedProduct.id,
    "Imagelink": storedProduct.Imagelink,
    "title": storedProduct.title,
    "desc": storedProduct.desc,
    "oldprice": storedProduct.oldprice,
    "price": storedProduct.price,
    "stores": storedProduct.stores,
    "category": storedProduct.category,
    "quantity": 1
  }

  // console.log(`${baseUrl}/users/${isLoggedInUserData.user.id}`)

  let userCartData = await fetchUserData()
  console.log(userCartData)

  await fetch(`${baseUrl}/users/${isLoggedInUserData.user.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      wishlist: [...userCartData.wishlist, obj]
    })
  })


}

whishlistBtn.addEventListener('click', handleAddToWhishlist);


