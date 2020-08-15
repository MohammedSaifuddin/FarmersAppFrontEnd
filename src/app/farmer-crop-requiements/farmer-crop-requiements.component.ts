import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-farmer-crop-requiements',
  templateUrl: './farmer-crop-requiements.component.html',
  styleUrls: ['./farmer-crop-requiements.component.css']
})
export class FarmerCropRequiementsComponent implements OnInit {
cropsData:any;
    constructor(    private userService: UserServiceService
      ) { }

  ngOnInit() {
    this.getCropsData();
  }
getCropsData(){
  this.userService.getBuyerCropsData().subscribe(data => {
    console.log("Retrieved Buyer Crop Data Is:: "+JSON.stringify(data));
    this.cropsData=data;
})
}
}

