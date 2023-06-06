import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { MoviesComponent } from '../movies/movies.component';
import { NewsComponent } from '../news/news.component';
import { WeatherComponent } from '../weather/weather.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard] },//authorization
      { path: 'news', component: NewsComponent, canActivate: [AuthGuard] },
      { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],//this routes belongs to child/feature module
  exports: [RouterModule]
})
export class AuthRoutingModule { }
