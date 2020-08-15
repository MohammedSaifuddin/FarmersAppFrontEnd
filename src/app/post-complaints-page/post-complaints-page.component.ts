import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-post-complaints-page',
  templateUrl: './post-complaints-page.component.html',
  styleUrls: ['./post-complaints-page.component.css']
})
export class PostComplaintsPageComponent implements OnInit {
  cropModel:any ={};
  new_user:any;
  constructor(private userService: UserServiceService,private http :HttpClient) { }

  ngOnInit() {
  this.new_user = JSON.parse(localStorage.getItem("users"))

  }
  sendFormData(){
    // alert(JSON.stringify(this.cropModel))
    this.cropModel.complaint_by_farmer_id = this.new_user[0].id;
    this.cropModel.complaint_status = 0;
  
    this.userService.postComplaintData(this.cropModel).subscribe(data => {
      alert("Details Entered Successfully")
  
      console.log("Response::"+JSON.stringify(data))
    })
  }
}




