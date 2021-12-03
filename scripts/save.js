var zero = 0;
var no = false;

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
  
  function load() {
    cookies = JSON.parse(localStorage.getItem('cookies'));
    clicker = JSON.parse(localStorage.getItem('clickers'));
    grandma = JSON.parse(localStorage.getItem('grandmas'));
    farm = JSON.parse(localStorage.getItem('farms'));
    factory = JSON.parse(localStorage.getItem('factories'));

    clickerPrice = JSON.parse(localStorage.getItem('clickerCost'));
    grandmaPrice = JSON.parse(localStorage.getItem('grandmaCost'));
    farmPrice = JSON.parse(localStorage.getItem('farmCost'));
    factoryPrice = JSON.parse(localStorage.getItem('factoryCost'));

    cheated = JSON.parse(localStorage.getItem('cheated'));

    window.alert('Data Loaded.');

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
          window.alert("Save data deleted.");
      }
  }

  function deleteSave() {
    localStorage.setItem('cookies', JSON.stringify(zero));
    localStorage.setItem('clickers', JSON.stringify(zero));
    localStorage.setItem('grandmas', JSON.stringify(zero));
    localStorage.setItem('farms', JSON.stringify(zero));
    localStorage.setItem('factories', JSON.stringify(zero));

    localStorage.setItem('cheated', JSON.stringify(no)); 

    localStorage.setItem('clickerCost', JSON.stringify(10));
    localStorage.setItem('grandmaCost', JSON.stringify(100));
    localStorage.setItem('farmCost', JSON.stringify(250));
    localStorage.setItem('factoryCost', JSON.stringify(800));

    cookies = JSON.parse(localStorage.getItem('cookies'));
    clicker = JSON.parse(localStorage.getItem('clickers'));
    grandma = JSON.parse(localStorage.getItem('grandmas'));
    farm = JSON.parse(localStorage.getItem('farms'));
    factory = JSON.parse(localStorage.getItem('factories'));

    cheated = JSON.parse(localStorage.getItem('cheated'));

    clickerPrice = JSON.parse(localStorage.getItem('clickerCost'));
    grandmaPrice = JSON.parse(localStorage.getItem('grandmaCost'));
    farmPrice = JSON.parse(localStorage.getItem('farmCost'));
    factoryPrice = JSON.parse(localStorage.getItem('factoryCost'));

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

  function manualSave() {
      save();
      window.alert('Data Saved.');
  }

  window.onbeforeunload = closingCode;
  function closingCode(){
    save();
     return null;
  }