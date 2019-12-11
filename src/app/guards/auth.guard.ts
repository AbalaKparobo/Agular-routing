import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, public router: Router) {}

  canActivate(): boolean {
    if(!this.authService.isAuthenticated()) {
      this.router.navigate(["login"]);
      return false;
    }
    // if(this.authService.isAuthenticated()) {
      return true;
    // }
  //   this.router.navigate(["login"]);
  //   return false;
  }
  
}
