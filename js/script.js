var buttonOpen = document.querySelector(".button-open");
var form = document.querySelector("form");
var dataCheckin = form.querySelector(".search-date-checkin");
var dataCheckout = form.querySelector(".search-date-checkout");
var adults = form.querySelector(".amountAdults");
var childen = form.querySelector(".amountChildren");
var storage = localStorage.getItem("adults");
var childen = localStorage.getItem("childen");

var isStorageSupport = true;
var storage = "";

buttonOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.toggle("activeForm");
    dataCheckin.focus();  
    if (storage) {
        adults.value = storage;
        childen.value = childen;
    }
});


form.addEventListener("submit", function (evt) {
    if (!dataCheckin.value || !dataCheckout.value) {
        evt.preventDefault();
      console.log("Необходимо ввести даты поездки!");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adults", adults.value);
            localStorage.setItem("childen", childen.value);
        }
    }
});


try{
    storage = localStorage.getItem("adults");
    storage = localStorage.getItem("childen");
} catch (err) {
    isStorageSupport = false;
}
