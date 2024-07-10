import hotbg from "./assets/hot.jpg";
import coldbg from "./assets/cold.jpg";
import hazebg from "./assets/haze.jpg";
import rainbg from "./assets/rainy.jpeg";
import Description from "./components/Description";
import { useEffect, useState } from "react";
import { getInfo } from "./weatherService";


function App() {
  const [weather, setWeather]= useState(null);
  const[units, setUnits]=useState("metric");

  useEffect(() => {
    const fetchWeatherData=async()=> {
      const data= await getInfo("paris", units);
     setWeather(data);
    };

    fetchWeatherData();
  },[units]);

// function to handle units dynamically

const handleUnitsClick = (e) => {
  const button = e.currentTarget;
  const currentUnit=button.innerText.slice(1);

  const isCelsius = currentUnit === "C";
  button.innerText= isCelsius ? "℉" : "℃";
  setUnits( isCelsius ? "metric" : "imperial");
};




  return (
    <div className="app" style={{backgroundImage: `url(${coldbg})`}}>
      <div className="overlay">
        {
          // now container will render when weather will be there because we put container div in weather 
        weather && (
          <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City Name..."/>
            
            <button onClick={(e)=> handleUnitsClick(e)}>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconUrl}alt="weather-icon" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()} °${units==="metric" ?
                "C" : "F"
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
