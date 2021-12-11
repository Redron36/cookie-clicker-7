// basic cookie stuff
var cookies = 0;
var power = 1;
var cps = 0;

var music = document.getElementById("music");

var cheated = false;

function increment() { // click cookie make cookie
    const element = document.getElementById('cookie')

    element.classList.remove('animation-target'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('animation-target'); // start animation

    cookies = cookies + power;
    counter.innerHTML = cookies;
}

function giveCookies(x) {
    cookies = cookies + x;
    counter.innerHTML = cookies;
    cheated = true;
}

function cookiesPerSecond() {
    cps = (clicker * clickerCPS) + (grandma * grandmaCPS) + (farm * farmCPS) + (factory * factoryCPS);
    cpsCount.innerHTML = cps;
    return cps;
};

window.setInterval(function updateCPS(){
    cookiesPerSecond();
}, 1);

function autoPlay() {
    setTimeout(() => {  playMusic(); }, 2500);
}

function playMusic() {
    music.play();
    music.volume = 0.25;
}

function pauseMusic() {
    music.pause();
}

document.getElementById('cookie').ondragstart = function() { return false; };
document.getElementsByClassName('helpers').ondragstart = function() { return false; };