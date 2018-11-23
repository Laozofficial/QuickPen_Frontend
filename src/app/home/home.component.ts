import { Component, OnInit } from "@angular/core";
import { Router, Routes } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  register = true;
  error = true;
  login = true;
  signingin = 'Sign in';
  email = '';
  password = '';
  constructor(
              // public route: ActivatedRoute,
              public router: Router
              ) {}

  ngOnInit() {}

  showform(){
    this.signingin = 'Laoding....';
    setTimeout(() => {
      this.login = false;
      this.signingin = 'Sign In';
    });
  }

  signup() {
    this.register = false;
    this.login = true;
  }

  signin() {
    this.login = false;
    this.register = true;
  }

  loginuser(){
    if(this.email == 'ellison@gmail.com', this.password == '123456'){
      this.router.navigate(["dashboard"]);
    }else{
      this.error = false;
    }
  }
}
