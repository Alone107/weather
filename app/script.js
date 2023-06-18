
  //https://openweathermap.org/img/wn/02d@2x.png
//   document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
let x;
function f8() {
     x = document.querySelector('.i-1').value;


    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + x + '&appid=70e1ed322b02acbc57d443dd91065f3e') 
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);

        document.querySelector('.package-name-d').innerHTML = data.name;
        document.querySelector('.country-d').textContent = data.sys.country;
        document.querySelector('.disclaimer-d').textContent = data.weather[0].main;
        document.querySelector('.veter-d').innerHTML = 'Ветер : ' + data.wind.speed + ' м/c.'
        document.querySelector('.price-d').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.features-d li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    
    })
    .catch(function () {
        // catch any errors
    });
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + x + '&appid=70e1ed322b02acbc57d443dd91065f3e') 
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);

        document.querySelector('.package-name-u').textContent = data.city.name;
        document.querySelector('.country-u').textContent = data.city.country;
        document.querySelector('.disclaimer-u').textContent = data.list[7].weather[0].main;
        document.querySelector('.veter-u').innerHTML = 'Ветер : ' + data.list[7].wind.speed + ' м/c.'
        document.querySelector('.price-u').innerHTML = Math.round(data.list[7].main.temp - 273) + '&deg;';
        document.querySelector('.features-u li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[7].weather[0]['icon']}@2x.png">`;
    

        document.querySelector('.package-name-n').textContent = data.city.name;
        document.querySelector('.country-n').textContent = data.city.country;
        document.querySelector('.disclaimer-n').textContent = data.list[3].weather[0].main;
        document.querySelector('.veter-n').innerHTML = 'Ветер : ' + data.list[3].wind.speed + ' м/c.'
        document.querySelector('.price-n').innerHTML = Math.round(data.list[3].main.temp - 273) + '&deg;';
        document.querySelector('.features-n li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[3].weather[0]['icon']}@2x.png">`;


    })
    .catch(function () {
        // catch any errors
    }); 

}
    document.querySelector('.button-primary').onclick = f8;
    // 1486209


