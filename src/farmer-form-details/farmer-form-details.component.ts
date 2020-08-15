import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { HttpClient } from '@angular/common/http';
import { FileUpload } from 'src/app/file-upload';


import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';


@Component({
  selector: 'app-farmer-form-details',
  templateUrl: './farmer-form-details.component.html',
  styleUrls: ['./farmer-form-details.component.css']
})
export class FarmerFormDetailsComponent implements OnInit {
  cropModel:any ={};
  new_user:any;
  selectedFile=null;

  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}
  private basePath = '/uploads';
  constructor(private db: AngularFireDatabase,private userService: UserServiceService, private http :HttpClient) { }

  ngOnInit() {
    this.new_user = JSON.parse(localStorage.getItem("users"))

  }
  sendFormData(){
    // alert(JSON.stringify(this.cropModel))
    this.cropModel.posted_user_email = this.new_user[0].email;
    this.cropModel.posted_user_role = this.new_user[0].role;
    this.cropModel.posted_user_id = this.new_user[0].id;
    // alert(this.new_user[0].id)

    this.userService.postProductData(this.cropModel).subscribe(data => {
      alert("Details Entered Successfully")

      console.log("Response::"+JSON.stringify(data))
    })
  }
  onFileSelected(event){

    this.selectedFile=event.target.files[0];
console.log(event)
  } 

  // pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
  //   const storageRef = firebase.storage().ref();
  //   const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
 
  //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  //     (snapshot) => {
  //       // in progress
  //       const snap = snapshot as firebase.storage.UploadTaskSnapshot;
  //       progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
  //     },
  //     (error) => {
  //       // fail
  //       console.log(error);
  //     },
  //     () => {
  //       // success
  //       uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
  //         console.log('File available at', downloadURL);
  //         fileUpload.url = downloadURL;
  //         fileUpload.name = fileUpload.file.name;
  //         this.saveFileData(fileUpload);
  //       });
  //     }
  //   );
  // }
  // private saveFileData(fileUpload: FileUpload) {
  //   this.db.list(`${this.basePath}/`).push(fileUpload);
  // }

  pushFileToStorage(fileUpload: FileUpload, progress: {percentage: number}) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
 
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // success

        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                  console.log('File available at', downloadURL);
                  fileUpload.url = downloadURL;
                  fileUpload.name = fileUpload.file.name;
                  this.cropModel.crop_image_url=downloadURL;
                  this.sendFormData();
                  // alert("URLL"+fileUpload.url)
                  // this.saveFileData(fileUpload);
                });
        // fileUpload.url = uploadTask.snapshot.downloadURL
        // fileUpload.name = fileUpload.file.name
        // this.saveFileData(fileUpload)
      //   fileUpload.url.subscribe(url=>{
      //     if(url){
      //         console.log(url);
      //         //wirte the url to firestore
      //     }
      //  })
      }
      
    );

    
  }
 
  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    const file = this.selectedFiles.item(0)
    this.currentFileUpload = new FileUpload(file);
    this.pushFileToStorage(this.currentFileUpload, this.progress)
  }
}
