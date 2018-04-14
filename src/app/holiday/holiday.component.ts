import { Component, OnInit } from '@angular/core';
import { HolidayserviceService } from '../holidayservice.service';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
  
  data: any;
  keys =[];
 
  constructor(private hs: HolidayserviceService) { }

  ngOnInit() {
    this.hs.getData().subscribe((data) => {
      this.data = data["holidays"];
      this.keys = Object.keys(this.data);
      this.hs.send.next(this.data)

    })

  }

}
