import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public userSer: UserService, public myRouter: Router) { }
  canActivate(): boolean { //this method decides whether the user can access to this route or not

    if (!this.userSer.isLoggedIn()) {
      this.myRouter.navigateByUrl('/login');
    }
    return this.userSer.isLoggedIn();
  }
}
