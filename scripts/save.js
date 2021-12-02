var zero = 0;

function save() {
    localStorage.setItem('cookies', JSON.stringify(cookies));
    localStorage.setItem('clickers', JSON.stringify(clicker));
    localStorage.setItem('grandmas', JSON.stringify(grandma));
    localStorage.setItem('farms', JSON.stringify(farm));
    localStorage.setItem('factories', JSON.stringify(factory));
  }
  
  function load() {
    cookies = JSON.parse(localStorage.getItem('cookies'));
    clicker = JSON.parse(localStorage.getItem('clickers'));
    grandma = JSON.parse(localStorage.getItem('grandmas'));
    farm = JSON.parse(localStorage.getItem('farms'));
    factory = JSON.parse(localStorage.getItem('factories'));
    window.alert('Data Loaded.');
    counter.innerHTML = cookies;
    clickers.innerHTML = clicker;
    grandmas.innerHTML = grandma;
    farms.innerHTML = farm;
    factories.innerHTML = factory;
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

    cookies = JSON.parse(localStorage.getItem('cookies'));
    clicker = JSON.parse(localStorage.getItem('clickers'));
    grandma = JSON.parse(localStorage.getItem('grandmas'));
    farm = JSON.parse(localStorage.getItem('farms'));
    factory = JSON.parse(localStorage.getItem('factories'));

    counter.innerHTML = cookies;
    clickers.innerHTML = clicker;
    grandmas.innerHTML = grandma;
    farms.innerHTML = farm;
    factories.innerHTML = factory;
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