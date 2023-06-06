import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MoviesComponent } from '../movies/movies.component';
import { NewsComponent } from '../news/news.component';
import { WeatherComponent } from '../weather/weather.component';

@NgModule({
  declarations: [
    NewsComponent,
    WeatherComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
