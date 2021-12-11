function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

var news_s0 = [ // no cookies :|
    'you feel like making cookies',
    'cookies are calling your name',
    'you feel as though the world depends on you making cookies'
]

var news_s1 = [ // bad cookies :(
    'your cookies dont taste very good',
    'your first batch goes in the garbage, even the rats avoid it',
    'your neighbors have moved to avoid the stech of your cookies',
    'the neighborhood protests against your cookies',
    'the local news describes your cookies as a biohazard',
    'your cookies seem to frown at you',
    '"maybe its the recipe", you tell yourself',
    'you hope your next batch isnt a failure'
];

var news_s2 = [ // cookies getting better
    'people begin to like your cookies',
    'a line stretches across your lawn, waiting for more cookies',
    'your neighborhood has flyers advertising your cookies',
    'not a single cookie is left in the trash',
    'the smell of cookies fills the neighborhood',
    'you see your cookies on a billboard',
    'your family calls asking for free cookies',
    'you forget how many batches youve made in the past hour'
];

var news_s3 = [ // some dang good cookies
    'people come from out of town to try your cookies',
    'your cookies make appearences in movies',
    'the news describes your cookies as a gift from god himself',
    'your cookies taste heavenly',
    'the air smells of cookies',
    'animals scavenge the garbage hoping to find your cookies',
    'all you can think about is cookies',
    'people try to recreate your recipe to no avail'
];

var news_s4 = s4;

var news_stage = [
    'Loading News.'
];

window.setTimeout(function news(){ // IT CHANGES LETS GOOOOOOOOOO
    var scroll = document.getElementById('news_flash');
    window.setInterval(function newsUpdate(){
        if (cookies <= 0)
        {
            news_stage = news_s0;
            console.log("news is stage 0");
        }

        if (cookies >= 1 && cookies < 250)
        {
            news_stage = news_s1;
            console.log("news is stage 1");
        }

        if (cookies >= 250 && cookies < 1000)
        {
            news_stage = news_s2;
            console.log("news is stage 2");
        }

        if (cookies >= 1000 && cookies < 5000)
        {
            news_stage = news_s3;
            console.log("news is stage 3");
        }

        if (cookies >= 5000)
        {
            news_stage = news_s4;
            console.log("news is stage 4");
        }

        scroll.innerHTML = get_random(news_stage);
    }, 6666.8);
}, 3000);

window.setInterval(news(), 1000);