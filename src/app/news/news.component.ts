import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newArr: any[] = [];
  constructor(public mservice: MenuService) { }
  ngOnInit(): void {
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
