var clicker = 0;
var grandma = 0;
var farm = 0;

var clickerPrice = 10;
var grandmaPrice = 100;
var farmPrice = 250;

var clickerCPS = 1;
var grandmaCPS = 5;
var farmCPS = 5;

var costMult = 1;

function buyClicker(){ // click button make click stronger
    if(cookies >= clickerPrice)
    {
        clicker = clicker + 1;
        cookies = cookies - clickerPrice;
        clickerPrice =  Math.round(clickerPrice * (power + clicker*costMult/2));
        counter.innerHTML = cookies;
        clickers.innerHTML = clicker;
        clickerCost.innerHTML = clickerPrice;
        costMult = Math.round(costMult*costMult/2);
    }
}

function buyGrandma(){ // click button make click stronger
    if(cookies >= grandmaPrice)
    {
        grandma = grandma + 1;
        cookies = cookies - grandmaPrice;
        grandmaPrice =  Math.round(grandmaPrice * (power + grandma*costMult/2));
        counter.innerHTML = cookies;
        grandmas.innerHTML = grandma;
        grandmaCost.innerHTML = grandmaPrice;
        costMult = Math.round(costMult * costMult);
    }
}

function buyFarm(){ // click button make click stronger
    if(cookies >= farmPrice)
    {
        farm = farm + 1;
        cookies = cookies - farmPrice;
        farmPrice =  Math.round(farmPrice * (power + farm*costMult));
        counter.innerHTML = cookies;
        farms.innerHTML = farm;
        farmCost.innerHTML = farmPrice;
        costMult = Math.round(costMult*costMult/2);
    }
}

window.setInterval(function clickerBake(){
    cookies = cookies + (clickerCPS * clicker);
    counter.innerHTML = cookies;

}, 1000);

window.setInterval(function grandmaBake(){
    cookies = cookies + (grandmaCPS * grandma);
    counter.innerHTML = cookies;

}, 1000);

window.setInterval(function farmBake(){
    cookies = cookies + (farmCPS * farm);
    counter.innerHTML = cookies;

}, 1000);