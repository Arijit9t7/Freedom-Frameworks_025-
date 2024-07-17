
let profileBtn = document.getElementById('profileBtn');
let mainDropdown = document.getElementById('nav-main-dropdown');
let MainDropdownflag = true;

function showMainDropdown() {
    if (MainDropdownflag) {
        mainDropdown.style.display = 'block';
        MainDropdownflag = false;
    }
    else {
        mainDropdown.style.display = 'none';
        MainDropdownflag = true;
    }
}

profileBtn.addEventListener('click', showMainDropdown);


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


  let signupRedirect = document.getElementById('signUpRedirect');



  signupRedirect.addEventListener('click', () => {
    window.location.href = './pages/signup/signup.html';
  });