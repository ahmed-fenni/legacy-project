import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  seeBook(email, password) {
    var user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);

    return this.http
      .post("http://localhost:8080/api/auth", user)
      .subscribe((res) => {
        let error = JSON.stringify({ msg: "user does not exist" });
        console.log(JSON.stringify(res), error);
        if (JSON.stringify(res) === error) {
          console.log("invalid password or e mail");
          return false;
        } else {
          return true;
        }
      });
  }
}
