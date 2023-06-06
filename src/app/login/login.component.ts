import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  arr: any[] = [];
  flag: boolean = false;
  usrname: string = '';
  pswd: string = '';
  msg: string = '';

  constructor(public usrSer: UserService, public myRouter: Router) { }

  ngOnInit(): void { }
  login() {
    console.log("login method called");
    this.usrSer.doLogin().subscribe({
      next: (data: any) => {
        //console.log(data);
        this.arr = data;
        // console.log(this.arr);
        for (var i = 0; i < this.arr.length; i++) {
          if (this.arr[i].username == this.usrname && this.arr[i].password == this.pswd) {
            localStorage.setItem("loggedUser", this.usrname);
            this.flag = true;
            this.myRouter.navigateByUrl("/auth/weather");
            break;
          }
        }
        if (this.flag == false) {
          this.usrname = '';
          this.pswd = '';
          this.msg = "Invalid Username/ Password";
          this.myRouter.navigateByUrl("/");
        }
      },
      error: (error: any) => {
        console.log(error);
      }
    }
    )
  }
}
