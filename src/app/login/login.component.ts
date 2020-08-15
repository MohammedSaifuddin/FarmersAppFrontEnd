import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  p_word: any;
  u_name: any;
  buyer: any;
  supplier: any;
 role:any;
  buyer_btn: boolean = true;
  supplier_btn: boolean = true;
userData:any;
  constructor(private router: Router,private userService: UserServiceService) { }

  ngOnInit() {
  }
  compareUserNameAndPassword() {
    if(this.u_name=='admin'){
      this.router.navigate(['/admin_page']);
    }
    else
    {
    this.userService.getAccountData(this.u_name,this.p_word,this.role).subscribe(data => {
      if(data){
         this.userData = JSON.stringify(data);
      console.log("DATA retrieved is ::"+this.userData)
      localStorage.clear();
      localStorage.setItem('users', JSON.stringify(data));

      if (!data[0]) {
        alert("Wrong Credentials :: Unsuccessfull Login")

      }
      else if (data[0]['role'] == 'Supplier') {
        alert("Successful Login !!!")

            this.router.navigate(['/farmer']);
          }
          else if (data[0]['role'] == 'Buyer') {
        alert("Successful Login !!!")

            this.router.navigate(['/crops']);
          }
      }
     

    })

  }
  //   if(this.buyer=='buyer'){
  // this.userName = 'gohar';
  //   this.password = 'mgw@123';
  //   if (this.u_name == this.userName && this.p_word == this.password) {
  //     alert("Login Successful");
  //     this.router.navigate(['/buyers']);
  //   }
  //   else {
  //     alert("Wrong Username or Password")
  //   }
  // }else{
  //   alert("Invalid User Type")
  //   window.location.reload();
  // }
  }
  setBuyer() {
    this.supplier_btn = false;
    this.role = 'buyer';
  }
  setSupplier() {
    this.buyer_btn = false;
    this.role = 'supplier';
  }
}
