import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class HolidayserviceService {
    send = new BehaviorSubject("/any");
    constructor(private http: HttpClient) { }
    getData() {

        return this.http.get('https://holidayapi.com/v1/holidays?key=aca95689-dd91-428a-9177-89fbe9fa3dc2&country=US&year=2015').map(response => {
            return response;

        });

    }

}



