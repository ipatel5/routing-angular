import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HolidayserviceService } from './holidayservice.service';
import { HolidayComponent } from './holiday/holiday.component';
import { RouterModule, Routes } from '@angular/router';
import { HolidaydetailComponent } from './holidaydetail/holidaydetail.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule, MatList} from '@angular/material/list';



const appRoutes: Routes = [
  {path:'', component:HolidayComponent},
  
  { path: 'holidaydetail/:id',  component: HolidaydetailComponent },
  

  
];

@NgModule({
  declarations: [
    AppComponent,
    HolidayComponent,
    HolidaydetailComponent,
    MatList,
    
   
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule,
    
  ],
  providers: [HolidayserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
