import hotbg from "./assets/hot.jpg";
import coldbg from "./assets/cold.jpg";
import hazebg from "./assets/haze.jpg";
import rainbg from "./assets/rainy.jpeg";
function App() {
  return (
    <div className="app" style={{backgroundImage: `url(${coldbg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section--inputs">
            <input type="text" name="city" placeholder="Enter City Name..."/>
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>varanasi</h3>
              <img src="https://openweathermap.org/img/wn/02d@2x.png"alt="weather" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
