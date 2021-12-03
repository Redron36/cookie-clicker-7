function qualify() {
    var choice = confirm("Are you sure you have baked 100 million cookies without cheating?");
    if (choice)
    {
        window.alert('You have: ' + cookies + ' cookies. Your cheating status shows as: ' + cheated);
    }
    else 
    {
        window.alert('Okay. Please try again once you have baked 100 million cookies.')
    }
}