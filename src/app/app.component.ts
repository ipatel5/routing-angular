import { Component,OnInit } from '@angular/core';
import { HolidayserviceService } from './holidayservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:any;
  constructor(){
  }

  ngOnInit(){
  }
}
