import { Injectable } from '@nestjs/common'
import { WEATHER_INFO } from '~/common/config/api-url'
import { request } from '~/common/config/request'
import { WeatherInfoResponse } from './interface/weather-info.interface'

@Injectable()
export class WeatherService {
  async weatherInfo(city: string, extensions?: string) {
    const response = await request.get<WeatherInfoResponse>(WEATHER_INFO, {
      params: { city, extensions }
    })

    return response.data
  }
}
