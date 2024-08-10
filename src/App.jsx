import { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import WeatherContextProvider from "./store/WeatherContextProvider";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <>
      <WeatherContextProvider>
        <div className="bodyComponent container mx-auto px-4 mt-8 ">
          <Search />
          <CurrentWeather />
        </div>
      </WeatherContextProvider>
      <Footer />
    </>
  );
}

export default App;
