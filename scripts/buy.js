var clickerPrice = 10;
var grandmaPrice = 100;

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
