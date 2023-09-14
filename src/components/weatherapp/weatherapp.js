import React, { useState } from 'react';
import '../style/weatherapp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';


const WeatherApp = () => {

    let api_Key='f478aaf4e3ace723ad5a7f0c67853032';
    const [wicon , setWicon] = useState(cloud_icon);

    const search= async ()=>{
        let city = document.getElementsByClassName('city-input');
        if(city[0].value === ''){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city[0].value }&units=metric&appid=${api_Key}`;
        
        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName('humidity-percent');
        const wind = document.getElementsByClassName('wind-rate');
        const temprature = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');

        humidity[0].innerHTML=data.main.humidity + ' %';
        wind[0].innerHTML=Math.floor(data.wind.speed )+ ' km/h';
        temprature[0].innerHTML=Math.floor(data.main.temp )+ '°C';
        location[0].innerHTML=data.name;


        if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n'){
            setWicon(clear_icon);
        } else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n'){
            setWicon(cloud_icon);
        } else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){
            setWicon(drizzle_icon);
        } else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){
            setWicon(drizzle_icon);
        } else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n'){
            setWicon(rain_icon);
        } else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n'){
            setWicon(rain_icon);
        } else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){
            setWicon(snow_icon);
        } else {
            setWicon(clear_icon) ;
        }


    }




  return (
    <div className='weather_page'>
    <div className='continent'>
    <div className='top-bar'>
    <input type='text' className='city-input' placeholder='Enter your City'></input>

    <div className='search-icon' onClick={()=>search()}>
        <img src={search_icon} alt="search icon" />
    </div>
    </div>
    <div className='weather-image'>
        <img src={wicon} alt='cloud day'/>
    </div>
    <div className='weather-temp'> 23°c </div>
    <div className='weather-location'> London </div>
    <div className='data-container'>
    <div className='element'>
    <img src={humidity_icon} alt='' className='icon'/>
        <div className='data'>
            <div className='humidity-percent'>64%</div>
            <div className='text'>Humidity</div>
        </div>
    </div>

    <div className='element'>
    <img src={wind_icon} alt='' className='icon'/>
        <div className='data'>
            <div className='wind-rate'>18 km/h</div>
            <div className='text'>wind Speed</div>
        </div>
    </div>

    </div>

    </div>





    </div>
  )
}

export default WeatherApp;