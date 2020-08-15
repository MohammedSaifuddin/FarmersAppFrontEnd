import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
// https://farmer-npm.herokuapp.com
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(
    private http: HttpClient
  ) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getNews() {
    return this.http.get(`http://localhost:8080/event`);
  }
  postAccountData(data) {
    console.log("Inside Post Account")
    return this.http.post(`http://localhost:8080/account_data`, JSON .stringify(data), this.httpOptions);
  }

  postProductData(data) {
    console.log("Inside Post Product")
    return this.http.post(`http://localhost:8080/product_data`, JSON.stringify(data), this.httpOptions);
  }

  postBuyerProductData(data) {
    console.log("Inside Post Product")
    return this.http.post(`http://localhost:8080/buyer_product_data`, JSON.stringify(data), this.httpOptions);
  }

  postComplaintData(data) {
    console.log("Inside Post Complaint")
    return this.http.post(`http://localhost:8080/complaint_data`, JSON.stringify(data), this.httpOptions);
  }

  postFarmingTipData(data) {
    console.log("Inside Post Farming Tip")
    return this.http.post(`http://localhost:8080/farming_tip`, JSON.stringify(data), this.httpOptions);
  }
  
  getComplaintData(id){
    console.log("00000000000000"+id)
    return this.http.get(`http://localhost:8080/get_complaint_data/`+id);
  }

  setComplaintStatus(id){
    console.log("00000000000000"+id)
    return this.http.get(`http://localhost:8080/set_complaint_status/`+id);
  }

  getAllComplaintDataForAdmin(){
    return this.http.get(`http://localhost:8080/get_all_complaint_data`);
  }
  getFarmingTips(){
    return this.http.get(`http://localhost:8080/get_all_farming_tips`);

  }
  // setComplaintStatus(id){
  //   console.log("00000000000000"+id)
  //   // return this.http.put(`http://localhost:8080/set_complaint_status/status/`,id);
  //   return this.http.post(`http://localhost:8080/set_complaint_status/status`, JSON.stringify(id), this.httpOptions);

  // }
getAccountData(email,password,type){
  return this.http.get(`http://localhost:8080/get_account/data/`+email+'/'+password+'/'+type);
}
getCropsData(){
  return this.http.get(`http://localhost:8080/crops`);
}

getBuyerCropsData(){
  return this.http.get(`http://localhost:8080/buyer_crops_for_farmer`);
}
getCropsDataById(id){
  console.log("00000000000000"+id)
  return this.http.get(`http://localhost:8080/crops_by_id/`+id);
}
getBuyerCropsDataById(id){
  console.log("00000000000000"+id)
  return this.http.get(`http://localhost:8080/buyer_crops_by_id/`+id);
}

getUserDataById(id){
  console.log("00000000000000"+id)
  return this.http.get(`http://localhost:8080/userdata_for_crops/`+id);
}

}
