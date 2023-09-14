import React , { useState } from 'react';
import './style/weatherapp.css';
import search_icon from './Assets/search.png';
import clear_icon from './Assets/clear.png';
import cloud_icon from './Assets/cloud.png';
import drizzle_icon from './Assets/drizzle.png';
import humidity_icon from './Assets/humidity.png';
import rain_icon from './Assets/rain.png';
import snow_icon from './Assets/snow.png';
import wind_icon from './Assets/wind.png';



const Weather = () => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    let Month = month[d.getMonth()];
    let Day = d.getDate();
    let day = weekday[d.getDay()];


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

    <div className='row weather-details m-lg-5 m-md-0'>
    <div className='col-lg-4 col-md-4 col-sm-12 weather-degree'>
    <div className='row '>
        <div className='col-lg-6 col-md-6 pt-lg-3 pt-md-2 Date one'> {day}</div>
        <div className='col-lg-6 col-md-6 pt-lg-3 pt-md-2 Date two'>{Day} {Month}</div>
        </div>

        <h2 className='weather-location mt-3 '> London </h2>
        <div className='row mb-md-3 '>
        <div className='col-lg-6 col-md-4 col-sm-3 weather-temp'> 23°c </div>
        <div className='col-lg-6 col-md-8 col-sm-9 weather-image'>
        <img src={wicon} alt='cloud day'/>
        </div>

        </div>
    </div>

    <div className='col-lg-4 col-md-4 col-sm-12 Humidity'>
    <div className='row'>
    <div className='row '>
        <div className='col-lg-6 col-md-6 pt-lg-3 pt-md-2 Date one'> {day}</div>
        <div className='col-lg-6 col-md-6 pt-lg-3 pt-md-2 Date two'>{Day} {Month}</div>
        </div>
    <h2 className=' text mb-lg-5  mb-md-4  mt-4'> Humidity </h2>
    
        <div className='row mb-md-3'>
        <div className='col-lg-6 col-md-8 col-sm-8 humidity'>
        <img src={humidity_icon} alt='humidity day'/>
        </div>
        <div className='col-lg-6 col-md-4 col-sm-2  weather-temp humidity-percent'> 64% </div>

    </div>
    </div>
    </div>


    <div className='col-lg-4 col-md-4 col-sm-12 wind'>
    <div className='row'>
    <div className='row '>
        <div className='col-lg-6 col-md-6 pt-lg-3 pt-md-2 Date one'> {day}</div>
        <div className='col-lg-6 col-md-6 pt-lg-3 pt-md-2 Date two'>{Day} {Month}</div>
        </div>
    <h2 className=' text mb-lg-5 mb-md-4 mt-4'> wind Speed </h2>
        <div className='row mb-md-3 '>
        <div className='col-lg-5 col-md-6 wind-img'>
        <img src={wind_icon} alt='humidity day'/>
        </div>
        <div className='col-lg-7 col-md-6 wind-rate'> 18 km/h </div>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Weather;