import axios from "axios";

// Declare Variable
export interface WeatherResponse {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const fetchingWeather = async (city: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: city,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error Fecthing Data Weather" + error);
  }
};
