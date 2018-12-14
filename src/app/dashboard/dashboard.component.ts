import { Component, OnInit } from '@angular/core';
import { PensService } from '../pens.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PensService]
})
export class DashboardComponent implements OnInit {
  // Power: string;

  constructor(public newpen: PensService) {
    // this.Power = Math.random() > 0.5 ? 'on' : 'off';
  }

  apps = this.newpen.apps;

  
  // powerColor() {
  //   // return this.Power === 'on' ? '#00c853' : '#dc3545';
  // }
  // changeStatus() {
  //   // this.Power = 'off';
  // }

  // delete() {
  //   // this.apps.splice(this.apps[id]);
  // }

  ngOnInit() {}
}
