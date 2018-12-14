import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor() {}

  formtext = "We will never share your email with anyone else.";
  formerror;

  ngOnInit() {}
}
