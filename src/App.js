import hotbg from "./assets/hot.jpg";
import coldbg from "./assets/cold.jpg";
import hazebg from "./assets/haze.jpg";
import rainbg from "./assets/rainy.jpeg";
import Description from "./components/Description";
import { useEffect } from "react";
import { getInfo } from "./weatherService";
function App() {
  useEffect(() => {
    const fetchWeatherData=async()=> {
      const data= await getInfo("paris");
    };

    fetchWeatherData();
  },[]);

  return (
    <div className="app" style={{backgroundImage: `url(${coldbg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City Name..."/>
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>Varanasi,UP</h3>
              <img src="https://openweathermap.org/img/wn/02d@2x.png"alt="weather-icon" />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34 °C</h1>
            </div>
          </div>
          {/* bottom description */}
          <Description/>
        </div>
      </div>
    </div>
  );
}

export default App;
