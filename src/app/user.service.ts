import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient, public myRouter: Router) { }
  doLogin() {
    return this.http.get("./assets/data.json");
  }
  isLoggedIn() {
    return !!localStorage.getItem("loggedUser");
  }
  isLogout() {
    localStorage.clear();
    this.myRouter.navigateByUrl("login");
  }
  getLoggedInUsername() {
    return localStorage.getItem("loggedUser");
  }
}
