const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const nameCity = document.querySelector('.nameCity');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const tempMax = document.querySelector('.tempMax');
const sensaTerm = document.querySelector('.sensaTerm');
const humedad = document.querySelector('.humedad');
const presionAt = document.querySelector('.presionAt');
const tempMin = document.querySelector('.tempMin');
const velocidadViento = document.querySelector('.velocidadViento');
const iconWeather = document.querySelector('.iconWeather');
const API_KEY = "3b40055d2d25406de922534fabea52f2";

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&lang=es&appid=3b40055d2d25406de922534fabea52f2')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        
        let tempMaxValue = data['main']['temp_max'];
        let tempMinValue = data['main']['temp_min'];
        let descValue = data['weather'][0]['description'];
        let iconValue = data['weather'][0]['icon'];


        let sensaTermValue = data['main']['feels_like'];
        let humedadValue = data['main']['humidity'];
        let presionAtValue = data['main']['pressure'];
        let velocidadVientoValue = data['wind']['speed'];

        nameCity.innerHTML = nameValue;
        temp.innerHTML = tempValue +'<span>°C</span>';
        tempMax.innerHTML = 'Temp. Maxima: '+ tempMaxValue+'<span>°C</span>';
        tempMin.innerHTML = 'Temp. Minima: '+ tempMinValue+'<span>°C</span>';
        desc.innerHTML = descValue;
        iconWeather.innerHTML = '<img src="http://openweathermap.org/img/wn/'+iconValue+'@2x.png"' + ' alt="' + descValue +'">';

        sensaTerm.innerHTML = 'Sensación térmica: '+ sensaTermValue+'<span>°C</span>';
        humedad.innerHTML = 'Humedad: '+ humedadValue+'<span>%</span>';
        presionAt.innerHTML = 'Presión: '+ presionAtValue+'<span> hPa</span>';
        velocidadViento.innerHTML = 'Velocidad del viento: '+ velocidadVientoValue+' <span>m/s</span>';


        console.log(humedad)
        console.log(presionAt)
        console.log(sensaTerm)
    })


    .catch(err => alert("Wrong city name!"))
})
