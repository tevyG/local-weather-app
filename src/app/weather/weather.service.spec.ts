/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing'
import { WeatherService } from './weather.service'

describe('Service: Weather', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
    })
  })

  it('should ...', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy()
  }))
})
