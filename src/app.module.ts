import { Module } from '@nestjs/common'
import { GeographyModule } from './geography/geography.module'
import { WeatherModule } from './weather/weather.module'

@Module({
  imports: [GeographyModule, WeatherModule]
})
export class AppModule {}
