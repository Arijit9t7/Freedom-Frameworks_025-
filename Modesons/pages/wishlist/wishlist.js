let baseUrl = `https://traveling-ubiquitous-study.glitch.me/users`;

let container = document.getElementById("wishlist-card-container");

let currentUser = JSON.parse(localStorage.getItem('isLoggedinUser'))
let idofCurrentUser = currentUser.user.id


let wishlistImage = document.getElementById("wishlist-card-img")
let wishlistTitle = document.getElementById("wishlist-card-title")
let wishlistDesc = document.getElementById("wishlist-card-desc")
let wishlistPrice = document.getElementById("wishlist-card-price")



let fetchData = async (baseURL) => {
    let res = await fetch(baseURL)
    let data = await res.json()
    return data
}



const showData = async (baseURL) => {
    // container.innerHTML = ""

    let newurl = `${baseURL}/${idofCurrentUser}`
    let data = await fetchData(newurl)
    data.wishlist.forEach((ele) => {
        

    })
}

showData(baseUrl)
