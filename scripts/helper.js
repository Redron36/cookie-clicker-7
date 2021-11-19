var clicker = 0;
var grandma = 0;
var farm = 0;

var clickerPrice = 10;
var grandmaPrice = 100;
var farmPrice = 250;

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

function buyFarm(){ // click button make click stronger
    if(cookies >= farmPrice)
    {
        farm = farm + 1;
        cookies = cookies - farmPrice;
        counter.innerHTML = cookies;
        farms.innerHTML = farm;
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

window.setInterval(function farmBake(){
    var farmCPS = 10;

    cookies = cookies + (farmCPS * farm);
    counter.innerHTML = cookies;

}, 1000);