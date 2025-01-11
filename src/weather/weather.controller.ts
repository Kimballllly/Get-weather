import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('city/:city/:lang')
  async getWeatherByCity(@Param('city') city: string, @Param('lang') lang: string) {
    return this.weatherService.getWeatherByCity(city, lang);
  }

  @Get('latlon/:lat/:lon')
async getWeatherByLatLon(@Param('lat') lat: string, @Param('lon') lon: string) {
  return this.weatherService.getWeatherByLatLon(lat, lon);
}

}
