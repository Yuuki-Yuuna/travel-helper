import { Controller, Get, Query } from '@nestjs/common'
import { IResponse } from '~/common/interface/response.interface'
import { GeographyService } from './geography.service'

@Controller('geography')
export class GeographyController {
  constructor(private readonly geographyService: GeographyService) {}

  @Get('geographyCode')
  geographyCode(
    @Query('address') address: string,
    @Query('city') city?: string
  ): Promise<IResponse> {
    return this.geographyService.geographyCode(address, city)
  }
}
