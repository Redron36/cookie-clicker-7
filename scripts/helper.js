var clicker = 0;
var grandma = 0;
var farm = 0;
var factory = 0;

var clickerPrice = 10;
var grandmaPrice = 100;
var farmPrice = 250;
var factoryPrice = 800;

var clickerCPS = 1;
var grandmaCPS = 5;
var farmCPS = 10;
var factoryCPS = 25;

var costMult = 1.5;

function priceMult(x){
    x = x * costMult;
    return x;
}

function buyClicker(){ // click button make click stronger
    if(cookies >= clickerPrice)
    {
        clicker = clicker + 1;
        cookies = cookies - clickerPrice;
        clickerPrice = priceMult(10) + clickerPrice;
        console.log("Clickers real cost: " + clickerPrice + " cookies");
        clickerPrice = Math.round(clickerPrice);
        counter.innerHTML = cookies;
        clickers.innerHTML = clicker;
        clickerCost.innerHTML = clickerPrice;
    }
}

function buyGrandma(){ // click button make click stronger
    if(cookies >= grandmaPrice && clicker >= 5)
    {
        grandma = grandma + 1;
        cookies = cookies - grandmaPrice;
        grandmaPrice = priceMult(100) + grandmaPrice;
        console.log("Grandmas real cost: " + grandmaPrice + " cookies");
        grandmaPrice = Math.round(grandmaPrice);
        counter.innerHTML = cookies;
        grandmas.innerHTML = grandma;
        grandmaCost.innerHTML = grandmaPrice;
    }
}

function buyFarm(){ // click button make click stronger
    if(cookies >= farmPrice && grandma >= 7)
    {
        farm = farm + 1;
        cookies = cookies - farmPrice;
        farmPrice = priceMult(250) + farmPrice;
        console.log("Farms real cost: " + farmPrice + " cookies");
        farmPrice = Math.round(farmPrice);
        counter.innerHTML = cookies;
        farms.innerHTML = farm;
        farmCost.innerHTML = farmPrice;
    }
}

function buyFactory(){ // click button make click stronger
    if(cookies >= factoryPrice && farm >= 10)
    {
        factory = factory + 1;
        cookies = cookies - factoryPrice;
        factoryPrice = priceMult(800) + farmPrice;
        console.log("Factories real cost: " + factoryPrice + " cookies");
        factoryPrice = Math.round(factoryPrice);
        counter.innerHTML = cookies;
        factories.innerHTML = factory;
        factoryCost.innerHTML = factoryPrice;
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

window.setInterval(function factoryBake(){
    cookies = cookies + (factoryCPS * factory);
    counter.innerHTML = cookies;

}, 1000);