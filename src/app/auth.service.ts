
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("users", token)
  }
  getToken() {
    return localStorage.getItem("users")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("users");
    this.myRoute.navigate(["login"]);
  }
}