// importing image as ketword

import hotbg from "./assets/hot.jpg";
import coldbg from "./assets/cold.jpg";
import hazebg from "./assets/haze1.jpeg";

// ********************************************

import Description from "./components/Description";
import { useEffect, useState } from "react";
import { getInfo } from "./weatherService";


function App() {
  const [city, setCity] = useState("Varanasi");
  const [weather, setWeather]= useState(null);
  const[units, setUnits]=useState("metric");
  const [bg, setBg] = useState(hotbg);

  useEffect(() => {
    const fetchWeatherData=async()=> {
      const data= await getInfo(city, units);
      setWeather(data);

    // dynamic background

      const threshold = units === "metric" ? 20 : 60;
      if(data.temp< 32 ) 
        if(data.temp< threshold) setBg(coldbg);
        else setBg(hazebg)
      else setBg(hotbg);
    };
    // ********************************************************

    fetchWeatherData();
  },[units, city]);

// function to handle units dynamically Alt+0176 for ° "degree"

const handleUnitsClick = (e) => {
  const button = e.currentTarget;
  const currentUnit = button.innerText.slice(1);

  const isCelsius = currentUnit === "C";
  button.innerText = isCelsius ? "°F" : "°C";
  setUnits(isCelsius ? "metric" : "imperial");
};
// ***********************************************************

// handling test field

const enterKetPressed = (e) => {
  if(e.keyCode === 13){
    setCity(e.currentTarget.value);
    e.currentTarget.blur();
  }
};
// *************************************************************


  return (
    <div className="app" style={{backgroundImage: `url(${bg})`}}>

      <div className="overlay">
        {
          // now container will render when weather will be there because we put container div in weather 
        weather && (
          <div className="container">
          <div className="section section__inputs">
            <input onKeyDown={enterKetPressed} type="text" name="city" placeholder="Enter City Name..."/>            
            <button onClick={(e) => handleUnitsClick(e)}>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconUrl}alt="weather-icon" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${
                  units === "metric" ? "C" : "F"
                }`}</h1>
              </div>
          </div>
          {/* bottom description */}
          <Description weather={weather} units={units} />
        </div>
       )}
      </div>
    </div>
  );
}

export default App;
