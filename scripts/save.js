function nullFix(x, y) { 
  if (JSON.parse(localStorage.getItem(x)) === null)
  {
    y = y + 0;
  }
  else
  {
    y = JSON.parse(localStorage.getItem(x));
  }
  
  return y;
}

function save() {
    localStorage.setItem('cookies', JSON.stringify(cookies));
    localStorage.setItem('clickers', JSON.stringify(clicker));
    localStorage.setItem('grandmas', JSON.stringify(grandma));
    localStorage.setItem('farms', JSON.stringify(farm));
    localStorage.setItem('factories', JSON.stringify(factory));

    localStorage.setItem('clickerCost', JSON.stringify(clickerPrice));
    localStorage.setItem('grandmaCost', JSON.stringify(grandmaPrice));
    localStorage.setItem('farmCost', JSON.stringify(farmPrice));
    localStorage.setItem('factoryCost', JSON.stringify(factoryPrice));

    localStorage.setItem('cheated', JSON.stringify(cheated)); 
  }
  
  function load(message) {
    autoPlay();
    cookies = nullFix('cookies', cookies);
    clicker = nullFix('clickers', clicker);
    grandma = nullFix('grandmas', grandma);
    farm = nullFix('farms', farm);
    factory = nullFix('factories', factory);

    clickerPrice = nullFix('clickerCost', clickerPrice);
    grandmaPrice = nullFix('grandmaCost', grandmaPrice);
    farmPrice = nullFix('farmCost', farmPrice);
    factoryPrice = nullFix('factoryCost', factoryPrice);

    cheated = JSON.parse(localStorage.getItem('cheated'));

    window.alert(message);

    counter.innerHTML = cookies;
    clickers.innerHTML = clicker;
    grandmas.innerHTML = grandma;
    farms.innerHTML = farm;
    factories.innerHTML = factory;

    clickerCost.innerHTML = clickerPrice;
    grandmaCost.innerHTML = grandmaPrice;
    farmCost.innerHTML = farmPrice;
    factoryCost.innerHTML = factoryPrice;
  }

  function deleteChoice() {
      var choice = confirm("Are you sure you want to delete your save?");
      if (choice)
      {
          deleteSave();
      }
  }

  function deleteSave() {
    localStorage.setItem('cookies', JSON.stringify(0));
    localStorage.setItem('clickers', JSON.stringify(0));
    localStorage.setItem('grandmas', JSON.stringify(0));
    localStorage.setItem('farms', JSON.stringify(0));
    localStorage.setItem('factories', JSON.stringify(0));

    localStorage.setItem('cheated', JSON.stringify(false)); 

    localStorage.setItem('clickerCost', JSON.stringify(10));
    localStorage.setItem('grandmaCost', JSON.stringify(100));
    localStorage.setItem('farmCost', JSON.stringify(250));
    localStorage.setItem('factoryCost', JSON.stringify(800));

    load('Data reset.');
  }

  function manualSave() {
      save();
      window.alert('Data saved.');
  }

  function autoLoad() {
    load('Data loaded.');
  }

  window.onbeforeunload = closingCode;
  function closingCode(){
    save();
     return null;
  }