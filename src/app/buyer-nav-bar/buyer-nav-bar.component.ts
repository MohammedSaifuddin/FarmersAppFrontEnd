import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-nav-bar',
  templateUrl: './buyer-nav-bar.component.html',
  styleUrls: ['./buyer-nav-bar.component.css']
})
export class BuyerNavBarComponent implements OnInit {
  new_user:any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logOut(){
    this.new_user = JSON.parse(localStorage.getItem("users"))
    if(this.new_user){
    localStorage.removeItem('users');
  this.router.navigate(['/home']);
  window.location.reload();

    }
    else 
{
}
  }
}
