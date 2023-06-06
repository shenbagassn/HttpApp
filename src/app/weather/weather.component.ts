import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { log } from 'console';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;
  cityName: string = '';
  errorMsg: string = '';
  msg: any;
  constructor(public mService: MenuService) { }

  ngOnInit(): void {
    this.msg = localStorage.getItem("loggedUser");
  }
  getWeather(cityName: string) {
    this.errorMsg = '';
    this.weather = '';
    this.mService.getWeather(cityName).subscribe(
      {
        next: (data: any) => {
          //console.log(data);
          this.weather = data;
          this.cityName = '';
          console.log(this.weather);
        },
        error: (error: any) => {
          console.log(error);
          this.errorMsg = error.error.message;
          this.cityName = '';
        }
      }
    )
  }
}
