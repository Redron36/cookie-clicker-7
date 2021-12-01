// basic cookie stuff
var cookies = 0;
var power = 1;
var cps = 0;

var cheated = false;

function increment() { // click cookie make cookie
    const element = document.getElementById('cookie')

    element.classList.remove('animation-target'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('animation-target'); // start animation

    cookies = cookies + power;
    counter.innerHTML = cookies;
    document.getElementById("numbers").style.textAlign = "center";
}

function giveCookies(x) {
    cookies = cookies + x;
    counter.innerHTML = cookies;
    console.log("cheated cookies dont taste good...")
    cheated = true;
}

window.setInterval(function updateCPS(){
    cps = (clicker * clickerCPS) + (grandma * grandmaCPS) + (farm * farmCPS);
    cpsCount.innerHTML = cps;
    document.getElementById("numbers").style.textAlign = "center";
}, 1000);

document.getElementById('cookie').ondragstart = function() { return false; };
document.getElementsByClassName('helpers').ondragstart = function() { return false; };
