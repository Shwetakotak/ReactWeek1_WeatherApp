import "./styles.css";
import FormSearch from "./FormSearch";

export default function App() {
  return (
    <>
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <FormSearch />
            <div class="overview">
              <h1 id="city"></h1>
              <ul>
                <li>
                  <span id="date"></span>
                </li>
                <li id="description"></li>
              </ul>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="clearfix weather-temperature">
                  <img src="" alt="Clear" id="icon" class="float-left" />
                  <div class="float-left">
                    <strong id="temperature"></strong>
                    <span class="units"> °C</span>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: <span id="wind"></span> m/h
                  </li>
                </ul>
              </div>
            </div>
            <div class="weather-forecast" id="forecast"></div>
          </div>
          <small>
            <a
              href="https://github.com/Shwetakotak/reactWeek1ProjectWeatherApp"
              target="_blank"
            >
              Open-sources code
            </a>
            , by Shweta Patil
          </small>
        </div>
      </div>
    </>
  );
}
