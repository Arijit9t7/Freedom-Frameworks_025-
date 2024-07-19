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

let baseUrl = `http://localhost:3000`


let loginBtn = document.getElementById('loginSubmitBtn');
let users = JSON.parse(localStorage.getItem('users')) || [];

const handleLogin = async (e) => {

    e.preventDefault();

    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');

    // console.log(email.value, password.value);

    if (loginEmail == "" && loginPassword === '') {
        alert('Fill all the field')
    }
    else {

        let email = loginEmail.value
        let password = loginPassword.value

        fetch(`${baseUrl}/users`)
            .then((res) => res.json())
            .then((res) => {
                let usersArr = res.filter((ele) => {
                    return ele.email == email && ele.password == password
                })

                if (usersArr.length == 0) {
                    alert('Please Register First')
                }
                else {
                    alert('Login Successfull')
                    localStorage.setItem('isLogged', JSON.stringify({
                        id: usersArr[0].id,
                        loginEmail
                    }))
                    window.location.href = "../../index.html"
                }
            })

    }
}


loginBtn.addEventListener('click', handleLogin);
