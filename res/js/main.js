const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const autoclick = document.getElementById("autoclick");

let numberOfCookies = 0;
let cookieIncrease = 1;
let upgradePrice = 100;
let autoclickPrice = 300;
let autoclickCookieIncrease = 0;
let autoclickInterval;

cookie.onclick = () => {

    numberOfCookies+=cookieIncrease;

    counter.innerText = "Bavlny v kg : " + Math.round(numberOfCookies);
}

upgrade.onclick = () => {
    if (numberOfCookies >= upgradePrice) {
        cookieIncrease ++;
        numberOfCookies -= upgradePrice;
        upgradePrice *=1.3;
    }
    counter.innerText = "Bavlny v kg: " + Math.round(numberOfCookies);
    upgrade.innerText = "Větší bič " + Math.round(upgradePrice);
}

autoclick.onclick = () => {
    if (numberOfCookies>=autoclickPrice) {
        
        numberOfCookies -= autoclickPrice;

        autoclickPrice *=1.2;

        counter.innerText = "Bavlny v kg : " + Math.round(numberOfCookies);

        autoclick.innerText = "Autoclicker " + Math.round (autoclickPrice);

        autoclickCookieIncrease ++;

        clearInterval (autoclickInterval);

        autoclickInterval = setInterval (() => {
            numberOfCookies += autoclickCookieIncrease;
            counter.innerText = "Bavlny v kg: " + Math.round(numberOfCookies);

        },10);
        
    }
}