let checkoutBtn = document.getElementById("checkoutBtn");
let paymentSuccessfullContainer = document.getElementById("paymentSuccessfullContainer");
let paymentSuccessfullBtn = document.getElementById("paymentSuccessfullBtn");



const handleCheckout = (event) => {
    event.preventDefault();
    console.log("Payment Successfull");
    paymentSuccessfullContainer.style.display = "block";
    setTimeout(() => {
        paymentSuccessfullContainer.style.display = "none";
        window.location.href = "../../index.html";
    }, 3000);
}


checkoutBtn.addEventListener("click", (event) => { handleCheckout(event) });


