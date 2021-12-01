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
  }

  window.setInterval(function autosave(){
    save();
}, 300000);