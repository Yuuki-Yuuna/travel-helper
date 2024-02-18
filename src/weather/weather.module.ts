import { Module } from '@nestjs/common'
import { GeographyService } from '~/geography/geography.service'
import { WeatherController } from './weather.controller'
import { WeatherService } from './weather.service'

@Module({
  controllers: [WeatherController],
  providers: [GeographyService, WeatherService]
})
export class WeatherModule {}
