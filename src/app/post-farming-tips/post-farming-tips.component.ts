import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-farming-tips',
  templateUrl: './post-farming-tips.component.html',
  styleUrls: ['./post-farming-tips.component.css']
})
export class PostFarmingTipsComponent implements OnInit {
  farmingTip:any ={};
  new_user:any;
  constructor(private userService: UserServiceService,private http :HttpClient) { }

  ngOnInit() {
  this.new_user = JSON.parse(localStorage.getItem("users"))

  }
  sendFormData(){
    // alert(JSON.stringify(this.farmingTip))
  
    this.userService.postFarmingTipData(this.farmingTip).subscribe(data => {
      alert("Details Entered Successfully")
  
      console.log("Response::"+JSON.stringify(data))
    })
  }
}
