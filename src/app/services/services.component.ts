import { Component, OnInit } from '@angular/core';
import { PensService } from '../pens.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [PensService]
})
export class ServicesComponent implements OnInit {
  constructor(public newpen: PensService) {}

  ngOnInit() {}
}
