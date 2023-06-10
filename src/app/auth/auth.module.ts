import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { MoviesComponent } from '../movies/movies.component';
import { NewsComponent } from '../news/news.component';
import { WeatherComponent } from '../weather/weather.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NewsComponent,
    WeatherComponent,
    MoviesComponent,
   
  ],
  imports: [
       AuthRoutingModule,
       SharedModule
  ]
})
export class AuthModule { }
