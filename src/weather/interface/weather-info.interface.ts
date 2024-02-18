import { IResponse } from '~/common/interface/response.interface'

export interface WeatherInfoResponse extends IResponse {
  count: number
  infocode: number
  lives?: WeatherInfoLive[]
  forecast?: WeatherInfoForecast[]
}

export interface WeatherInfoLive {
  province: string
  city: string
  adcode: string
  reporttime: string
  weather: string
  temperature: number
  humidity: number
  winddirection: string
  windpower: string
}

export interface WeatherInfoForecast {
  province: string
  city: string
  adcode: string
  reporttime: string
  casts: WeatherInfoCast[]
}

export interface WeatherInfoCast {
  date: string
  week: number
  dayweather: string
  nightweather: string
  daytemp: number
  nighttemp: number
  daywind: string
  nightwind: string
  daypower: string
  nightpower: string
}
