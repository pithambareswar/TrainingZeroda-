

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ================================
// CLOSE MOBILE MENU AFTER CLICK
// ================================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ================================
// SIGN UP BUTTON
// ================================

const signupBtn = document.getElementById("signupBtn");
const startBtn = document.getElementById("startBtn");

function openSignup() {

    alert(
        "Welcome to TradeLite!\n\n" +
        "This is an educational demo website."
    );

}

signupBtn.addEventListener("click", openSignup);

startBtn.addEventListener("click", openSignup);


// ================================
// LEARNING BUTTON
// ================================

const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", function () {

    alert(
        "TradeLite Academy\n\n" +
        "Learning resources will be available here."
    );

});


// ================================
// SIMPLE MARKET PRICE ANIMATION
// ================================

let price = 24680.90;

const priceElement = document.querySelector(".market-price");

setInterval(function () {

    const change =
        (Math.random() - 0.5) * 10;

    price += change;

    priceElement.textContent =
        "₹" + price.toFixed(2);

}, 2000);
