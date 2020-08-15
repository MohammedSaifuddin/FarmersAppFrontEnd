import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-for-login',
  templateUrl: './registration-for-login.component.html',
  styleUrls: ['./registration-for-login.component.css']
})
@Injectable()
export class RegistrationForLoginComponent implements OnInit {
  userData: any;
  accountsModel: any = {};
  role: any;

  constructor(
    private userService: UserServiceService,
    private router:Router
  ) {


  }

  ngOnInit() {
  }
  selectChangeHandler(event: any) {
    this.role = event.target.value;
    console.log(this.role)
  }
  getUserData() {
    this.accountsModel.role=this.role;
    // alert("Accounts Model : " + JSON.stringify(this.accountsModel));
    if(this.accountsModel.password==this.accountsModel.confirm_password){
    this.userService.postAccountData(this.accountsModel).subscribe(data => {
      alert("User Registered Successfully")

      console.log("Response::"+JSON.stringify(data))
    this.router.navigate(['/login']);

    })

  }else{
    alert("Passwords Do Not Match")
  }
    // this.userService.getNews().subscribe(heroes => this.userData = heroes);
    // alert(this.userData);
    // console.log(this.userData);

  }
}
