import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaydetailComponent } from './holidaydetail.component';

describe('HolidaydetailComponent', () => {
  let component: HolidaydetailComponent;
  let fixture: ComponentFixture<HolidaydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
