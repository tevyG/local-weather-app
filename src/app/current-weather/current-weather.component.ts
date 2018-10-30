import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  // constructor() {
  //   this.current = {
  //     city: 'Farmingville',
  //     country: 'USA',
  //     date: new Date(),
  //     image: 'assets/img/sunny.svg',
  //     temperature: 55,
  //     description: 'sunny',
  //   } as ICurrentWeather
  // }

  constructor(private weatherServer: WeatherService) {}

  ngOnInit() {
    this.weatherServer
      .getCurrentWeather('Farmingville', 'US')
      .subscribe(data => (this.current = data))
  }
}
