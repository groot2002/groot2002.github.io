let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let search = e.target.firstElementChild.value;
  let promise = new Promise((resolve, reject) => {
    if (search.trim() === '') reject('Error');
    else resolve(search);
  })
  promise
    .then(search => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=76b65f52068fef2f3ad1b33cd69f0baa&lang=vi`)
        .then(response => {
          response.json().then(information => {
            if (information.cod == 200){
              let cityName = document.querySelector('#cityName');
              let temp = document.querySelector('#temp');
              let highestTemp = document.querySelector('#high-temp');
              let lowestTemp = document.querySelector('#low-temp');
              let weather = document.querySelector('#weather');
              let description = document.querySelector('#description');
              cityName.value = information.name;    
              temp.value = Math.floor(parseInt(information.main.temp)).toString() + '°C';
              highestTemp.value = Math.floor(parseInt(information.main.temp_max)).toString() + '°C';
              lowestTemp.value = Math.floor(parseInt(information.main.temp_min)).toString() + '°C';
              weather.value = information.weather[0].main;
              description.value = information.weather[0].description;
            }else{
              alert(information.message)
            }
          
          })
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      alert(err);
    })
  
})