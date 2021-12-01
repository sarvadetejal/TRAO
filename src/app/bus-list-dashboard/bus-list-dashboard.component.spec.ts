import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusListDashboardComponent } from './bus-list-dashboard.component';

describe('BusListDashboardComponent', () => {
  let component: BusListDashboardComponent;
  let fixture: ComponentFixture<BusListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusListDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
