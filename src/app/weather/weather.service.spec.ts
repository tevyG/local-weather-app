/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { inject, TestBed } from '@angular/core/testing'
import { WeatherService } from './weather.service'

describe('Service: Weather', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [HttpClientTestingModule],
    })
  })

  it('should ...', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy()
  }))
})
