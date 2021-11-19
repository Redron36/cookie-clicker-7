// basic cookie stuff
var cookies = 0;
var power = 1;
var cps = 0;

function increment() { // click cookie make cookie
    const element = document.getElementById('cookie')

    element.classList.remove('animation-target'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('animation-target'); // start animation

    cookies = cookies + power;
    counter.innerHTML = cookies;
}

window.setInterval(function updateCPS(){
    cps = (clicker * clickerCPS) + (grandma * grandmaCPS) + (farm * farmCPS);
    cpsCount.innerHTML = cps;
}, 1000);

document.getElementById('cookie').ondragstart = function() { return false; };
document.getElementsByClassName('helpers').ondragstart = function() { return false; };