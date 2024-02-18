import { IResponse } from '~/common/interface/response.interface'

export interface GeographyCodeReponse extends IResponse {
  geocodes: GeographyCode[]
}

export interface GeographyCode {
  country: string
  province: string
  city: string
  adcode: string
  citycode: string
  district: string
  street: string
  number: string
  location: string
  level: string
}
