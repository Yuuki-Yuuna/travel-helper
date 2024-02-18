import { Injectable } from '@nestjs/common'
import { GEO_CODE_GEO } from '~/common/config/api-url'
import { request } from '~/common/config/request'
import { GeographyCodeReponse } from './interface/geography-code.interface'

@Injectable()
export class GeographyService {
  async geographyCode(address: string, city?: string) {
    const response = await request<GeographyCodeReponse>(GEO_CODE_GEO, {
      params: { address, city }
    })

    return response.data
  }
}
