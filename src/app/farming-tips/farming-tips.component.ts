import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-farming-tips',
  templateUrl: './farming-tips.component.html',
  styleUrls: ['./farming-tips.component.css']
})
export class FarmingTipsComponent implements OnInit {
  new_user:any;
  cropModel:any={};
  search_id:any;
    constructor(private userService:UserServiceService) { }
  
  
    ngOnInit() {
      this.sendFormData();
      }
      sendFormData(){
        // alert(JSON.stringify(this.cropModel))
        // alert(this.search_id)
      
        this.userService.getFarmingTips().subscribe(data => {
          // alert("Details Retrieved Successfully"+JSON.stringify(data))
          this.cropModel =data;
          console.log("Response::"+JSON.stringify(data))
        })
      }
  
}
