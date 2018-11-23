import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  Power;
  constructor() {
    this.Power = Math.random() > 0.5 ? "on" : "off";
  }

  apps = [
    {
      username: "Laoz Ellison",
      this: "facebook",
      then: "blogger",
      thisimage: "../../assets/img/Facebook.png",
      thenimage: "../../assets/img/Blogger.png",
      settings: {
        switch: {
          Power: "on",
          timer: "10 minutes"
        }
      },
      runtime: "120"
    },
    {
      username: "Dammy",
      this: "twitter",
      then: "wordpress",
      thisimage: "../../assets/img/twitter.png",
      thenimage: "../../assets/img/wordpress.png",
      settings: {
        switch: {
          Power: "off",
          timer: "12 minutes"
        }
      },
      runtime: "140"
    },
    {
      username: "Jon Smith",
      this: "instagram",
      then: "pintrest",
      thisimage: "../../assets/img/instagram.png",
      thenimage: "../../assets/img/pinterest.png",
      settings: {
        switch: {
          Power: "off",
          timer: "5 minutes"
        }
      },
      runtime: "120"
    },
    {
      username: "Lukas Grams",
      this: "translate",
      then: "Wordpress",
      thisimage: "../../assets/img/google_translate.png",
      thenimage: "../../assets/img/wordpress.png",
      settings: {
        switch: {
          Power: "off",
          timer: "5 minutes"
        }
      },
      runtime: "123"
    }
  ];

  powerColor() {
    return this.Power === "on" ? "#00c853" : "#dc3545";
  }
  changeStatus() {
    this.Power = "off";
  }

  ngOnInit() {}
}
