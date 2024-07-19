let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let container=document.getElementById("container")



for(let i=0;i<wishlist.length;i++){
    console.log(wishlist[i])
    let card=document.createElement("div")
    card.id="wishlist-card"
    let img=document.createElement("img")
    img.id="wishlist-image"
    img.setAttribute("src",wishlist[i].Imagelink)
    let name=document.createElement("h1")
    name.textContent=wishlist[i].title

    card.append(img,name)
    container.append(card)
}

