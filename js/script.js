var buttonOpen = document.querySelector(".button-open");
var form = document.querySelector("form");
var dataCheckin = form.querySelector(".search-date-checkin");
var dataCheckout = form.querySelector(".search-date-checkout");
var adults = form.querySelector(".amountAdults");
var childen = form.querySelector(".amountChildren");

var isStorageSupport = true;
var storage = "";

try{
    storageAdults = localStorage.getItem("adults");
    storageChilden = localStorage.getItem("childen");
} catch (err) {
    isStorageSupport = false;
}

buttonOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.toggle("activeForm");
    dataCheckin.focus();  
});


form.addEventListener("submit", function (evt) {
    if (!dataCheckin.value || !dataCheckout.value) {
        evt.preventDefault();
        form.classList.remove("form-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("form-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adults", adults.value);
            localStorage.setItem("childen", childen.value);
        }
    }
});

