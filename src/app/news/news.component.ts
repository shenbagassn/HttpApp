import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newArr: any[] = [];
  environment =environment;
  constructor(public mservice: MenuService) { }
  ngOnInit(): void {
    console.log(this.environment);
    
    this.mservice.getFullNews().subscribe({
      next: (data: any) => {
        //console.log(data);
        this.newArr = data.articles;
        //console.log(this.newArr);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
  getCategoryNews(category: any) {
    this.mservice.getcategoryWiseNews(category.target.value).subscribe({
      next: (data: any) => {
        console.log(data.articles);
        this.newArr = data.articles;
        console.log(category);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
