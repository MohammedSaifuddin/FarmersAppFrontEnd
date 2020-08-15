import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-nav-bar',
  templateUrl: './supplier-nav-bar.component.html',
  styleUrls: ['./supplier-nav-bar.component.css']
})
export class SupplierNavBarComponent implements OnInit {
  new_user: any;

  constructor(private router : Router) { }

  ngOnInit() {
  }
  logOut(){
    this.new_user = JSON.parse(localStorage.getItem("users"))
    if(this.new_user){
    localStorage.clear();
  this.router.navigate(['/home']);
  window.location.reload();

    }
    else 
{
}
  }
}
