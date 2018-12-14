import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DashboardComponent } from "./dashboard/dashboard";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  register = true;
  error = true;
  login = false;
  signingin = 'Sign in';
  email;
  spinner = true;
  loginbutton = false;
  password;
  constructor(
    // public route: ActivatedRoute,
    public router: Router // public dashboard: DashboardComponent
  ) {}

  ngOnInit() {}

  showform() {
    this.signingin = 'Laoding....';
  }

  signup() {
    this.register = false;
    this.login = true;
  }

  signin() {
    this.login = false;
    this.register = true;
  }

  loginuser() {
    if (this.password = '123456') {
      this.signingin = 'signing in';
      this.loginbutton = true;
      this.spinner = false;
      setTimeout(() => {
        this.router.navigate(['dashboard']);
      }, 4000);
    }
    if (this.password !== '123456'){
      this.signingin = 'signing in';
      this.loginbutton = true;
      this.spinner = false;
      setTimeout(() => {
        this.error = false;
      }, 4000);
      this.signingin = 'sign in';
      this.loginbutton = false;
      this.spinner = true;
    }
  }
}
