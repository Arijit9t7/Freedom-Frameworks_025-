
let kidsUrl = `https://modesense-data.onrender.com/kidsproducts`;
let mensUrl = `https://modesense-data.onrender.com/menproducts`;
let womenUrl = `https://modesense-data.onrender.com/womenproducts`;
let homeUrl = `https://modesense-data.onrender.com/homeproducts`;
let beautyUrl = `https://modesense-data.onrender.com/beautyproducts`;


let allProductArr = [kidsUrl, mensUrl, womenUrl, homeUrl, beautyUrl];

const ShowData = (data) => {
    const productsContainer = document.getElementById('allProduct-container');
    data.forEach(product => {

        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.style.cursor = "pointer";

        productElement.addEventListener('click', () => {
            window.location.href = `../productDescriptionPage/productDescriptionPage.html`;

            if (!localStorage.getItem('singleProduct')) {
                localStorage.removeItem('singleProduct')
                localStorage.setItem('singleProduct', JSON.stringify(product))
            } else {
                localStorage.setItem('singleProduct', JSON.stringify(product))
            }
        });


        const productImage = document.createElement('div');
        productImage.className = 'product-image';
        const productDetails = document.createElement('div');
        productDetails.className = 'product-details';

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.title;
        const productDesc = document.createElement('p');
        productDesc.textContent = product.desc;
        const productPrice = document.createElement('span');
        productPrice.textContent = `${product.price}`;
        const productOldPrice = document.createElement('span');
        productOldPrice.textContent = `${product.oldprice}`;

        let oldPrice = product.oldprice.replace(/₹|,/g, "").trim();
        let newPrice = product.price.replace(/₹|,/g, "").trim();
        let oldPriceNumber = Number(oldPrice);
        let newPriceNumber = Number(newPrice);
        let discountPercentage = Math.abs(Math.round((oldPriceNumber - newPriceNumber) / newPriceNumber * 100));
        const productDiscount = document.createElement('span');
        productDiscount.textContent = `${discountPercentage}% off`;

        const productImageElement = document.createElement('img');
        productImageElement.src = product.Imagelink;


        productImage.appendChild(productImageElement);
        productDetails.append(productTitle, productDesc, productPrice, productOldPrice, productDiscount);

        productElement.append(productImage, productDetails);

        productsContainer.append(productElement);
    });
}


let searchData = [];
let StoreDataforSearch = async (URL) => {
    let data = await fetchData(URL);
    data.forEach((ele) => {
        searchData.push(ele);
    });
};

let fetchData = async (URL) => {
    let res = await fetch(URL);
    let data = await res.json();
    return data;
};

let fetchAllData = async () => {
    let promises = allProductArr.map((url) => StoreDataforSearch(url));
    await Promise.all(promises);
    ShowData(searchData);
};

let productSearch = document.getElementById("productSearch");

let handleSearchInput = (searchData, value) => {
    let ndata = searchData.filter((ele) => {
        return (
            ele.title.toLowerCase().includes(value.toLowerCase()) ||
            ele.id.includes(value) ||
            ele.category.toLowerCase().includes(value.toLowerCase())
        );
    });
    ShowData(ndata)
};

productSearch.addEventListener("input", handleSearchInput(searchData, productSearch.value));



fetchAllData();



// allProductArr.forEach((url) => {
//     ShowData(url);
// })