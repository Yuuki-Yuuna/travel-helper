import { Controller, Get, Query } from '@nestjs/common'
import { IResponse } from '~/common/interface/response.interface'
import { GeographyService } from '~/geography/geography.service'
import { WeatherService } from './weather.service'

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly geographyService: GeographyService,
    private readonly weatherService: WeatherService
  ) {}

  @Get('report')
  async weatherInfo(
    @Query('city') city: string, // 城市名字或地址
    @Query('extensions') extensions?: string
  ): Promise<IResponse> {
    const { geocodes } = await this.geographyService.geographyCode(city)
    if (!geocodes.length) {
      return { status: 0, info: '没有找到区域' }
    }
    const { adcode } = geocodes[0]
    return this.weatherService.weatherInfo(adcode, extensions)
  }
}
