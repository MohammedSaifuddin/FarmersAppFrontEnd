import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../app/user-service.service';
@Component({
  selector: 'app-buyer-product-details',
  templateUrl: './buyer-product-details.component.html',
  styleUrls: ['./buyer-product-details.component.css']
})
export class BuyerProductDetailsComponent implements OnInit {
cropsData:any;
    constructor(    private userService: UserServiceService
      ) { }

  ngOnInit() {
    this.getCropsData();
  }
getCropsData(){
  this.userService.getCropsData().subscribe(data => {
    console.log("Retrieved Crop Data Is:: "+JSON.stringify(data));
    this.cropsData=data;
})
}
}
