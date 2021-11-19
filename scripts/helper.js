var clickerPrice = 10;
var grandmaPrice = 100;

var clickerPower = 0.1;
var grandmaPower = 1;

function buyClicker(){ // click button make click stronger
    if(cookies >= clickerPrice)
    {
        clicker = clicker + 1;
        cookies = cookies - clickerPrice;
        counter.innerHTML = cookies;
        clickers.innerHTML = clicker;
    }
}

function buyGrandma(){ // click button make click stronger
    if(cookies >= grandmaPrice)
    {
        grandma = grandma + 1;
        cookies = cookies - grandmaPrice;
        counter.innerHTML = cookies;
        grandmas.innerHTML = grandma;
    }
}

window.setInterval(function clickerBake(){
    var clickerCPS = 1;

    cookies = cookies + (clickerCPS * clicker);
    counter.innerHTML = cookies;

}, 1000);

window.setInterval(function grandmaBake(){
    var grandmaCPS = 5;

    cookies = cookies + (grandmaCPS * grandma);
    counter.innerHTML = cookies;

}, 1000);