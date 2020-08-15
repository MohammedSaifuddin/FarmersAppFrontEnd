import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  new_user: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.new_user = JSON.parse(localStorage.getItem("users"))
    if(this.new_user){
    localStorage.clear();
    }
    else 
{
  this.router.navigate(['/login']);
}
  }

}
