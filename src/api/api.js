import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const WEATHER_API_URL = process.env.REACT_APP_WEATHER_BASE_URL;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const services = {
  hotelAPI: {
    getAllHotels: async (setHotels) => {
      await axios
        .get(`${BASE_URL}/hotels`)
        .then((response) => setHotels(response.data))
        .catch((error) => console.log(error));
    },
    getTwoHotels: async (setHotels) => {
      await axios
      .get(`${BASE_URL}/hotels`)
      .then((response) => {
        const allHotels = response.data;
        const lastTwoHotels = allHotels.slice(-2);
        setHotels(lastTwoHotels);
      })
      .catch((error) => console.log(error));
    },
    getHotelById: async (id, setHotel) => {
      await axios
        .get(`${BASE_URL}/hotels/${id}`)
        .then((response) => setHotel(response.data))
        .catch((error) => console.log(error));
    }
  },
  weatherAPI: {
    getWeatherByCity: async (city, setWeather) => {
      await axios
        .get(`${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`)
        .then((response) => setWeather(response.data))
        .catch((error) => console.log(error));
    },
  }
};

export default services;