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
        console.log(iconValue);


        let sensaTermValue = data['main']['feels_like'];
        let humedadValue = data['main']['humidity'];
        let presionAtValue = data['main']['pressure'];
        let velocidadVientoValue = data['wind']['speed'];

        nameCity.innerHTML = nameValue;
        temp.innerHTML = tempValue +'<span>°C</span>';
        tempMax.innerHTML = 'Temp. Máxima: '+ tempMaxValue+'<span>°C</span>';
        tempMin.innerHTML = 'Temp. Mínima: '+ tempMinValue+'<span>°C</span>';
        desc.innerHTML = descValue;
        iconWeather.innerHTML = '<img src="http://openweathermap.org/img/wn/'+iconValue+'@2x.png"' + ' alt="' + descValue +'">';

        sensaTerm.innerHTML = 'Sensación térmica: '+ sensaTermValue+'<span>°C</span>';
        humedad.innerHTML = 'Humedad: '+ humedadValue+'<span>%</span>';
        presionAt.innerHTML = 'Presión: '+ presionAtValue+'<span> hPa</span>';
        velocidadViento.innerHTML = 'Velocidad del viento: '+ velocidadVientoValue+' <span>m/s</span>';


        console.log(humedad)
        console.log(presionAt)
        console.log(sensaTerm)
        
        changePalette(iconValue)
        changeWithIcon(iconValue)
    })
    

    .catch(err => alert("Por favor escribe correctamente el nombre de la ciudad en el buscador :)"))
})


const changeWithIcon = (iconValue) => {
    console.log(iconValue);
    const videoWeather = document.querySelector('.videoWeather');

    if (iconValue == '04n'){

    videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/orlW2HR0swc?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
    

    } else if (iconValue == '04d'){

    videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Stcqv4XZ5Qk?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
        


    } else if (iconValue == '02d'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/rApFbTBKnnU?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }


    else if (iconValue == '03d'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/VcVhG3Kwm9g?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }


    else if (iconValue == '09d'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/6IWZCDVoYWo?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }

    else if (iconValue == '09n'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/6IWZCDVoYWo?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }

    else if (iconValue == '10n'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/6IWZCDVoYWo?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }

    else if (iconValue == '10d'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/fB1nZX_Mr80?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }


    else if (iconValue == '11d'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/AsD5u6k6dKI?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }


    else if (iconValue == '11n'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/AsD5u6k6dKI?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }

    else if (iconValue == '13d'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/hU_pIFsq-VM?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }


    else if (iconValue == '13n'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/OC0cVvZVEL4?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }

    else if (iconValue == '50d'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/AkR6V3S2zcM?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }

    else if (iconValue == '50n'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/AkR6V3S2zcM?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }

    else if (iconValue == '02n'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/3v0kXidBvmM?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }

    else if (iconValue == '01n'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oAd55BQsJLM?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }


    else if (iconValue == '03n'){

        videoWeather.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/0kunFcVq0KE?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>';
            
    }


}

const changePalette = (iconValue) => {

    const body = document.getElementById("body");
    console.log(iconValue);
    if (iconValue == '01n' || '02n' || '03n' || '04n' || '09n' || '10n' || '11n' || '13n' || '50n'){
        body.classList.add ("noche");
    } else {
        body.classList.add ("dia");
    }

    console.log("Al menos leo la funcion changePalette")
}
