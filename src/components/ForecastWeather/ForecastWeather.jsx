import { useContext } from "react";
import { WeatherContext } from "../../store/WeatherContext";
import { WEATHER_API_IMG } from "../../apis/weatherApi";

const ForecastWeather = () => {
  const { currentWeatherData, forecastData } = useContext(WeatherContext);

  function convertDate(wDate){ 
    return new Date(wDate).toLocaleTimeString('en-AU', {
      hour: 'numeric', day: 'numeric', month: 'short'
    }).replace(/ /g, ' ');
  }
 
  return (
    <>
      {forecastData && (
        <>
          <div className="text-gray-800 text-left p-4">
            <div className="grid md:grid-cols-1 text-gray-600 text-left  ">
              <p className="text-2xl font-medium text-white"> Next day Highlights </p>
            </div>
          </div>

          <div className="rounded-lg  grid md:grid-cols-8 gap-4 text-white text-left px-4 pb-4">
            {forecastData.map((forecast, index) => (
              <div className="bg-slate-500 rounded-lg gap-4 text-white text-left p-2" key={index}>
                <p className="text-white"> { convertDate(forecast.dt_txt) }  </p>

                <div className="">
                  <img
                    alt="weather"
                    className="weather-icon"
                    src={`${WEATHER_API_IMG}/${forecast.weather[0].icon}@2x.png`}
                  />
                </div>

                <p className="capitalize">
                    {currentWeatherData.weather[0].description}
                  </p>

                <div className="flex flex-row text-slate-900">
                <p className="mr-2 ">
                    {Math.round(forecast.main.temp_max)}&deg;C{" "}
                  </p>
                  <p className="text-slate-900">
                    {Math.round(forecast.main.temp_min)}&deg;C{" "}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ForecastWeather;
