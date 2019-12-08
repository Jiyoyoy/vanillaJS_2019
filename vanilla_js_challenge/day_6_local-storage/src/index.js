const selectCountry = document.querySelector(".js-selected");
const USER_COUNTRY = selectCountry.options[selectCountry.selectedIndex].value;
const COUNTRY_LS = "User Country";

document.addEventListener('click', init)

function saveCountry(text){
  localStorage.setItem(COUNTRY_LS,text);
}

function setCountry(){
  saveCountry(USER_COUNTRY);
}

function init(){
  setCountry();
}

init();