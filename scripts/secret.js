var found = false;
function secrets(x){
    switch(x){
        case "secret": 
            if (found){
                console.log("trying to get more cookies? then go make some idiot");
            }

            else {
                giveCookies(25);
                console.log("you found a secret! as a reward, you get 25 cookies")
                found = true;
            }
            break;
        case "broken fingers":
            console.log("you have been sued by many for forcing people to click until their fingers broke");
            window.setInterval(function deleteClicker(){
                clickerCPS = 0;
                clickers.innerHTML = 0;
                cpsCount.innerHTML = cps;
            }, 1);
            break;
        case "abolish slavery":
            console.log("slavery abloished, now you have no grandmas");
            window.setInterval(function deleteGrandma(){
                grandmaCPS = 0;
                grandmas.innerHTML = 0;
                cpsCount.innerHTML = cps;
            }, 1);
            break;
        case "international drout":
            console.log("an international drout has made your farms innefective");
            window.setInterval(function deleteFarm(){
                farmCPS = 0;
                farms.innerHTML = 0;
                cpsCount.innerHTML = cps;
            }, 1);
            break;
        case "industrial revolution":
            console.log("i dont agree with that, so now you cant use factories");
            window.setInterval(function deleteFactory(){
                factoryCPS = 0;
                factories.innerHTML = 0;
                cpsCount.innerHTML = cps;
            }, 1);
            break;

        default:
            console.log("you didnt find a secret...")

    }
}
