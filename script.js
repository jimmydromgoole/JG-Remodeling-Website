const searchIcon = document.getElementById("search");
const menuBarIcon = document.getElementById("menu-bar");
const searchForm = document.getElementById("searchform");
const searchInput = document.getElementById("searchInput")
const nav =document.querySelector('.navbar');

searchIcon.addEventListener("click", handleSearchIconClick);
menuBarIcon.addEventListener("click", handleMenuBarClick);
searchForm.addEventListener("click", handleSearchFormClick);
searchInput.addEventListener("input", handleSearchInput);

function handleSearchIconClick() {
    searchForm.classList.toggle('active');
}

function handleMenuBarClick() {
    menuBarIcon.classList.toggle('active');
    menuBarIcon.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

function handleSearchFormClick(event) {
    event.stopPropagation();
}

function handleSearchInput() {
    const searchTerm = searchInput.value.trim();
}