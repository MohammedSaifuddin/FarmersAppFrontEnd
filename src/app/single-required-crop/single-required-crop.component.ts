import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-single-required-crop',
  templateUrl: './single-required-crop.component.html',
  styleUrls: ['./single-required-crop.component.css']
})
export class SingleRequiredCropComponent implements OnInit {
  product_id:any;
  cropsData:any;
  usersData:any;
  posted_user_id:any;
  constructor(private actRoute: ActivatedRoute,private userService: UserServiceService) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.product_id = params.get('id');
      // alert(this.product_id)
      this.getCropsData();
    });
  }

  getCropsData(){
    this.userService.getBuyerCropsDataById(this.product_id).subscribe(data => {
      console.log("Retrieved Buyer Crop Data Is:: "+JSON.stringify(data));
      this.cropsData=data;

      
      this.posted_user_id = this.cropsData[0].posted_user_id;

      this.userService.getUserDataById(this.posted_user_id).subscribe(data => {
        console.log("Retrieved User Data Is:: "+JSON.stringify(data));
        this.usersData=data;
      })

  })
  }
}

