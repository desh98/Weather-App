import React, { useState, useEffect } from 'react';
import { SectionWrapper } from '../hoc';
import { StarsCanvas } from './canvas';


const Weather = () => {
  const [showMore, toggleShowMore] = useState(false);
  const [weatherData, setWeatherdata] = useState();
  const [Forecastdata, setForecastdata] = useState([]);
  const [dayData, setDaysData] = useState([])

  const [lat, SetLat] = useState(6.927079);
  const [lon, SetLon] = useState(79.861244);

  const searchPressed = () => {
    fetchCurrentData();
    fetchDaydata();
  }

  

  // Current data API

  const fetchCurrentData = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9665c5ca7fd57336ee2b06f48a3352d3`;
    fetch(apiUrl).then((response) => response.json())
      .then((data) => {
        setWeatherdata(data)
        console.log(data)
      }).catch((err) => console.log(err))
  }

  // Current UPCOMING data API

  const fetchDaydata = () => {

    const f_apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&exclude={hourly}&appid=9665c5ca7fd57336ee2b06f48a3352d3`;
    fetch(f_apiUrl).then((response) => response.json())
      .then((data) => {
        setForecastdata(data.list)
        // console.log(data.list)
        makeNewArray(data.list)
      }).catch((err) => console.log(err))

  }


  useEffect(() => {
    fetchCurrentData();
    fetchDaydata();

  }, []);


  function makeNewArray(data) {
    const filteredData = data?.reduce((result, entry, index, array) => {
      // Extract the date part from dt_txt
      const currentDate = entry.dt_txt.split(" ")[0];
      if (
        index === 0 ||
        currentDate !== array[index - 1].dt_txt.split(" ")[0]
      ) {
        result.push(entry);
      }
      return result;
    }, []);
    setDaysData(filteredData);
    console.log(filteredData)
  }


  return (
    <div className=" p-8 justify-center items-center flex flex-col">
      {/* Main container */}
      <div className="container mx-auto p-8 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">

        <div className="flex flex-col md:flex-row justify-between">
          {/* Weather side */}
          <div className="weather-side relative h-full flex flex-col items-center justify-center text-center">
            
            {/* Today temp and weather */}
            <div className="weather-container p-2">
              <h1 className="weather-temp font-bold text-3xl">{(weatherData?.main.temp - 273).toFixed(0)}°C</h1>
              <h3 className="weather-desc text-sm">{weatherData?.weather[0].main}</h3>
            </div>

            {/* City and country */}
            <div className="date-container text-center mb-4">
              <h1 className="font-semibold text-lg">{weatherData?.name}, {weatherData?.sys.country}</h1>
            </div>


            {/* Longitude, Latitude Search */}
            <div className="flex flex-col items-center justify-center p-4 space-x-2">
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Latitude"
                  className="py-2 px-4 rounded-md bg-white text-black shadow-md"
                  onChange={(e) => SetLat(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Longitude"
                  className="py-2 px-4 rounded-md bg-white text-black shadow-md"
                  onChange={(e) => SetLon(e.target.value)}
                />
              </div>

              {/* Search button */}
              <button className="py-2 px-6 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition duration-300 ease-in-out" onClick={searchPressed}>
                Search
              </button>
            </div>
            {/* Current Weather data */}
          </div>
          <div className="info-side flex flex-col justify-center text-black">
            <div className="today-info-container mb-6 p-4 bg-white rounded-lg shadow-md">

              {/* Pressure */}
              <div className="info-item mb-2 flex justify-between">
                <span className="title font-semibold">Pressure</span>
                <span className="value text-sm">{weatherData?.main.pressure} mm</span>
              </div>

              {/* Humidity */}
              <div className="info-item mb-2 flex justify-between">
                <span className="title font-semibold">HUMIDITY</span>
                <span className="value text-sm">{weatherData?.main.humidity} %</span>
              </div>

              {/* Wind */}
              <div className="info-item flex justify-between">
                <span className="title font-semibold">WIND</span>
                <span className="value text-sm">{weatherData?.wind.speed} km/h</span>
              </div>
            </div>

            {/* Next three days forecast */}
            <div className="week-container p-4 bg-white rounded-lg shadow-md">
              <ul className="week-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

                {/* Day 1 */}
                <li className="day-item text-center p-6 mr-2 rounded border-4">
                  <i className="day-icon feather text-xl mb-2" data-feather="sun"></i>
                  <h3 className="day-name text-xs font-semibold">{Forecastdata[1]?.dt_txt.split(" ")[0]}</h3>
                  <span className="day-temp text-sm">{Forecastdata[1]?.main.temp}°C</span>
                </li>

                {/* Day 2 */}
                <li className="day-item text-center p-6 border-4 mr-2">
                  <i className="day-icon feather text-xl mb-2" data-feather="cloud"></i>
                  <h3 className="day-name text-xs font-semibold">{Forecastdata[2]?.dt_txt.split(" ")[0]}</h3>
                  <span className="day-temp text-sm">{Forecastdata[2]?.main.temp}°C</span>
                </li>

                {/* Day 3 */}
                <li className="day-item text-center p-6 border-4 mr-2">
                  <i className="day-icon feather text-xl mb-2" data-feather="cloud-snow"></i>
                  <h3 className="day-name text-xs font-semibold">{Forecastdata[3]?.dt_txt.split(" ")[0]}</h3>
                  <span className="day-temp text-sm">{Forecastdata[3]?.main.temp}°C</span>
                </li>
              </ul>
            </div>

            {/* Show more button */}
            <button onClick={() => toggleShowMore(!showMore)} className="mt-4 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition duration-300 ease-in-out">
              {showMore ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </div>

      {/* Forecast data */}

     {
      showMore ? (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-around container mt-4 mx-auto p-8 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white'>

      {/* Weather card 1 */}
      <div className='bg-white/20 shadow-sm shadow-black-200 rounded-md p-4 flex flex-col items-center text-center'>
        <h1 className='font-semibold text-sm'>{Forecastdata[1].dt_txt.split(" ")[0]}</h1>
        <h1 className='font-semibold text-2xl'>{Forecastdata[1]?.main.temp}°C</h1>
        <h2 className='font-semibold text-sm'>{Forecastdata[1]?.weather[0].main}</h2>
      </div>
    
      {/* Weather card 2 */}
      <div className='bg-white/20 shadow-sm shadow-black-200 rounded-md p-4 flex flex-col items-center text-center'>
        <h1 className='font-semibold text-sm'>{Forecastdata[2].dt_txt.split(" ")[0]}</h1>
        <h1 className='font-semibold text-2xl'>{Forecastdata[2]?.main.temp}°C</h1>
        <h2 className='font-semibold text-sm'>{Forecastdata[2]?.weather[0].main}</h2>
      </div>
    
      {/* Weather card 3 */}
      <div className='bg-white/20 shadow-sm shadow-black-200 rounded-md p-4 flex flex-col items-center text-center'>
        <h1 className='font-semibold text-sm'>{Forecastdata[3].dt_txt.split(" ")[0]}</h1>
        <h1 className='font-semibold text-2xl'>{Forecastdata[3]?.main.temp}°C</h1>
        <h2 className='font-semibold text-sm'>{Forecastdata[3]?.weather[0].main}</h2>
      </div>
    
      {/* Weather card 4 */}
      <div className='bg-white/20 shadow-sm shadow-black-200 rounded-md p-4 flex flex-col items-center text-center'>
        <h1 className='font-semibold text-sm'>{Forecastdata[4].dt_txt.split(" ")[0]}</h1>
        <h1 className='font-semibold text-2xl'>{Forecastdata[4]?.main.temp}°C</h1>
        <h2 className='font-semibold text-sm'>{Forecastdata[4]?.weather[0].main}</h2>
      </div>
    
      {/* Weather card 5 */}
      <div className='bg-white/20 shadow-sm shadow-black-200 rounded-md p-4 flex flex-col items-center text-center'>
        <h1 className='font-semibold text-sm'>{Forecastdata[5].dt_txt.split(" ")[0]}</h1>
        <h1 className='font-semibold text-2xl'>{Forecastdata[5]?.main.temp}°C</h1>
        <h2 className='font-semibold text-sm'>{Forecastdata[5]?.weather[0].main}</h2>
      </div>
    
    </div>
    ):null
     }
    <div><StarsCanvas /></div>
    </div>
    
    
  );
};


export default SectionWrapper(Weather, "weather");