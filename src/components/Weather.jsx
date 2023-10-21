import React from 'react';

const Weather = () => {
  return (
    <div className="p-12 justify-center items-center">
    <div className="container mx-auto p-8 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
      <div className="flex justify-between">
      <div className="weather-side relative h-full flex flex-col items-center justify-center pr-8">
      <div className="weather-container text-center p-2">
            <i className="weather-icon feather text-4xl mb-2" data-feather="sun"></i>
            <h1 className="weather-temp font-bold text-3xl">29°C</h1>
            <h3 className="weather-desc text-sm">Sunny</h3>
          </div>
          <div className="date-container text-center mb-4">
            <h1 className="font-semibold text-lg">Tuesday</h1>
            <span className="text-sm">15 Jan 2019</span>
            <div className="flex items-center justify-center mt-2">
              <i className="location-icon feather mr-2" data-feather="map-pin"></i>
              <span className="text-sm">Paris, FR</span>
            </div>
          </div>
          
      </div>
        <div className="text-center mt-6">
        <button className="location-button flex items-center bg-white text-gray-800 font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <i className="feather mr-2" data-feather="map-pin"></i>
          <span>Change location</span>
        </button>
      </div>
        <div className="info-side flex flex-col justify-center text-black">
          <div className="today-info-container mb-6 p-4 bg-white rounded-lg shadow-md">
            <div className="info-item mb-2 flex justify-between">
              <span className="title font-semibold">PRECIPITATION</span>
              <span className="value text-sm">0 %</span>
            </div>
            <div className="info-item mb-2 flex justify-between">
              <span className="title font-semibold">HUMIDITY</span>
              <span className="value text-sm">34 %</span>
            </div>
            <div className="info-item flex justify-between">
              <span className="title font-semibold">WIND</span>
              <span className="value text-sm">0 km/h</span>
            </div>
          </div>
          <div className="week-container p-4 bg-white rounded-lg shadow-md">
            <ul className="week-list flex justify-between">
              <li className="day-item text-center">
                <i className="day-icon feather text-xl mb-2" data-feather="sun"></i>
                <span className="day-name text-xs">Tue</span>
                <span className="day-temp text-sm">29°C</span>
              </li>
              <li className="day-item text-center">
                <i className="day-icon feather text-xl mb-2" data-feather="cloud"></i>
                <span className="day-name text-xs">Wed</span>
                <span className="day-temp text-sm">21°C</span>
              </li>
              <li className="day-item text-center">
                <i className="day-icon feather text-xl mb-2" data-feather="cloud-snow"></i>
                <span className="day-name text-xs">Thu</span>
                <span className="day-temp text-sm">08°C</span>
              </li>
              <li className="day-item text-center">
                <i className="day-icon feather text-xl mb-2" data-feather="cloud-rain"></i>
                <span className="day-name text-xs">Fri</span>
                <span className="day-temp text-sm">19°C</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    
    </div>
  );
};

export default Weather;