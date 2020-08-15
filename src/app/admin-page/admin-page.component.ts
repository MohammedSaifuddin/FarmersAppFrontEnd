import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  new_user:any;
  cropModel:any={};
  statusModel:any={};
  search_id:any;
  set_complaint_status_id :any;
    constructor(private userService:UserServiceService) { }
  
  
    ngOnInit() {
      this.new_user = JSON.parse(localStorage.getItem("users"))
      this.sendFormData();
      }
      sendFormData(){
        // alert(JSON.stringify(this.cropModel))
        this.search_id = this.new_user[0].id;
        // alert(this.search_id)
      
        this.userService.getAllComplaintDataForAdmin().subscribe(data => {
          // alert("Details Retrieved Successfully"+JSON.stringify(data))
          this.cropModel =data;
          console.log("Response::"+JSON.stringify(data))
        })
      }
  
setComplaintStatus(){

}
changeStatus(selectedItem: any) {
  this.set_complaint_status_id=selectedItem.id;
this.statusModel.id=this.set_complaint_status_id;
  this.userService.setComplaintStatus(this.set_complaint_status_id).subscribe(data => {
    // alert("Details Retrieved Successfully"+JSON.stringify(data))
    console.log("Response::"+JSON.stringify(data))
  })

  console.log("Selected item Id: ", selectedItem.id); // You get the Id of the selected item here
  window.location.reload();
  
}
}
