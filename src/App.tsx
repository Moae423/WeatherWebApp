import { useState } from "react";
import "./App.css";
import { fetchingWeather, WeatherResponse } from "./api/WeatherApi";
import Countdown from "./components/Countdown";
import InputArea from "./components/InputArea";
import Output from "./components/Output";

function App() {
  const [City, setCity] = useState("");
  const [Weather, setWeather] = useState<WeatherResponse | null>(null);
  const [Error, setError] = useState<string | null>(null);

  const HandleFetchWeather = async () => {
    try {
      const data: WeatherResponse = await fetchingWeather(City);
      setWeather(data);
    } catch (err) {
      setError("Tolong masukkan Kotanya terlebih Dahulu" + err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]">
      <div className="grid grid-flow-col gap-4">
        <Countdown />
        <div className="row-span-2 rounded-2xl bg-[#00B4D8] py-3 shadow-lg">
          <InputArea
            Error={Error}
            value={City}
            handleWeather={HandleFetchWeather}
            handleChange={(e) => setCity(e.target.value)}
          />
        </div>
        {/* <div className="row-span-3 p-8 flex items-center justify-center rounded-2xl bg-[#00B4D8] shadow-lg"> */}
        <Output Weather={Weather} />
        {/* </div> */}
      </div>
      {/* <MyButton title="testing123" /> */}
    </div>
  );
}

export default App;
