import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-newapp',
  templateUrl: './newapp.component.html',
  styleUrls: ['./newapp.component.css'],
  providers: [ApisService]
})
export class NewappComponent implements OnInit {
  constructor(public apiservice: ApisService) {}
  that = true;
  this = false;

  myapis = this.apiservice.apis;
  ngOnInit() {}
}
