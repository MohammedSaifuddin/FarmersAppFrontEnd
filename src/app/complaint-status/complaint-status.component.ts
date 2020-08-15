import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-complaint-status',
  templateUrl: './complaint-status.component.html',
  styleUrls: ['./complaint-status.component.css']
})
export class ComplaintStatusComponent implements OnInit {
new_user:any;
cropModel:any={};
search_id:any;
  constructor(private userService:UserServiceService) { }


  ngOnInit() {
    this.new_user = JSON.parse(localStorage.getItem("users"))
    this.sendFormData();
    }
    sendFormData(){
      // alert(JSON.stringify(this.cropModel))
      this.search_id = this.new_user[0].id;
      // alert(this.search_id)
    
      this.userService.getComplaintData(this.search_id).subscribe(data => {
        // alert("Details Retrieved Successfully"+JSON.stringify(data))
        this.cropModel =data;
        console.log("Response::"+JSON.stringify(data))
      })
    }

}
