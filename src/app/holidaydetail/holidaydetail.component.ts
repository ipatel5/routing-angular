import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HolidayserviceService } from '../holidayservice.service';

@Component({
  selector: 'app-holidaydetail',
  templateUrl: './holidaydetail.component.html',
  styleUrls: ['./holidaydetail.component.css']
})
export class HolidaydetailComponent implements OnInit {
  id: any;
  detaildata;
  emptyarray=[]
  arr=[]
  constructor(private route: ActivatedRoute, private hs: HolidayserviceService) { }

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      this.id = +data['id']
     
    });
    this.hs.send.subscribe((data2)=>{
      this.detaildata=data2;
      this.emptyarray=Object.keys(this.detaildata)
      console.log(this.emptyarray[this.id])
      this.arr=this.detaildata[this.emptyarray[this.id]]
  
      console.log(this.arr)
      
    })

}
}