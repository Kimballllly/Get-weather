import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private readonly apiKey = 'f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026';
  private readonly apiHost = 'open-weather13.p.rapidapi.com';

  async getWeatherByCity(city: string, lang: string) {
    try {
      const response = await axios.get(
        `https://${this.apiHost}/city/${city}/${lang}`,
        {
          headers: {
            'X-Rapidapi-Key': this.apiKey,
            'X-Rapidapi-Host': this.apiHost,
          },
        },
      );

      const data = response.data;
      const formattedData = {
        location: `${data.name}, ${data.sys.country}`,
        weather: {
          condition: data.weather[0].main,
          description: data.weather[0].description,
          icon_url: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        },
        temperature: {
          current: `${data.main.temp}°F`,
          min: `${data.main.temp_min}°F`,
          max: `${data.main.temp_max}°F`,
          feels_like: `${data.main.feels_like}°F`,
        },
        wind: {
          speed: `${data.wind.speed} m/s`,
          direction: `${data.wind.deg}°`,
        },
        humidity: `${data.main.humidity}%`,
        visibility: `${data.visibility / 1000} km`,
        pressure: `${data.main.pressure} hPa`,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(lang, {
          hour: '2-digit',
          minute: '2-digit',
        }),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(lang, {
          hour: '2-digit',
          minute: '2-digit',
        }),
        last_updated: "1 minute ago",
      };

      return formattedData;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error fetching weather data',
        error.response?.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
