import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(public http: HttpClient) { }
  getWeather(cityName: string) {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=3a3eb62e70b9745f96cb7c04245a9cb8&units=imperial");
  }
  getFullNews() {
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=408b4153b994422d8638da72f2d3ac5b");
  }
  getcategoryWiseNews(category: any) {
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=" + category + "&apiKey=408b4153b994422d8638da72f2d3ac5b");
  }
  movies(moviename: any) {
    return this.http.get("http://www.omdbapi.com/?t=" + moviename + "&apikey=c429066e");
  }
}
