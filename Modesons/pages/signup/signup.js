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