import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { async } from "@angular/core/testing";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  animations: [
  
  ]
})
export class ProfileComponent {
  selectedFile: File;
  configUrl = "http://localhost:8080/uploade";
  image = "./assets/img/theme/no-profile-picture.jpg";
  div1=false;
  data ={
  fullname : "user",
  age : 99,
  town : "from",
  occupation : "work"
  }
  constructor(private http: HttpClient) {}

 
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  
  div1Function(){
    this.div1= !this.div1
    
}
 onSubmit(fullname,age,town,occupation){
   this.data.fullname = fullname.value
   this.data.age = age.value
   this.data.town = town.value
   this.data.occupation = occupation.value
   

 }
  
  onUpload() {
    console.log(this.image);
    const uploadData = new FormData();

    uploadData.append("myFile", this.selectedFile, this.selectedFile.name);

    return this.http.post(this.configUrl, uploadData).subscribe((data: any) => {
      console.log(data);
      let x = "./assets/img/theme/" + "myFile-1594319779446.jpg"
      console.log(x)
      setTimeout(()=>{this.image = x },1500);
      
    });
  }
}
