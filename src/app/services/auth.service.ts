import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private userIsOnline:boolean;

  public isAuthenticated(): boolean {
    // Check user auth state
    return sessionStorage.getItem("userData") !== null && sessionStorage.getItem("userData").length > 0;
  }

  public async login(postData) {
    // login logic
    const reponseData = {
      "name": "abala kparobo",
      "id": "987",
      "token": "JDKSJBDSDBALS"
    }

    await sessionStorage.setItem("userData", JSON.stringify(reponseData));
    return true;
  }

  getUserData() {
    return JSON.parse(sessionStorage.getItem("userData"));
  }

  public signup(postData) {
    // signup logic
  }

  public async logout() {
    // logout logic
    await sessionStorage.removeItem("userData");
    await sessionStorage.clear();
    return true;
  }
}
