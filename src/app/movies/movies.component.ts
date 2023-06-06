import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movietxt: any;
  movieData: any = '';
  errorMsg:string = '';
  constructor(public mservice: MenuService) { }
  ngOnInit(): void {
  }
  getMovies(movie: any) {
    this.mservice.movies(movie).subscribe({
      next: (data: any) => {
        console.log(data);
        console.log(data.Error);
        if(data.Error){
          this.errorMsg=data.Error;
          this.movieData = '';
        }
        else{
          this.movieData = data;
          this.errorMsg='';
        }
        this.movietxt = '';
      },
      error: (error: any) => {
       console.log(error);       
        this.movietxt = '';
      }
    })
  }
}
