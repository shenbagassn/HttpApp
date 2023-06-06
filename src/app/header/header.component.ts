import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(public uservice:UserService) { }

  ngOnInit(): void {
  }
  isLoggedIn(){
   return this.uservice.isLoggedIn();
  
   
  }
  doLogout(){
 this.uservice.isLogout();
  }


}
