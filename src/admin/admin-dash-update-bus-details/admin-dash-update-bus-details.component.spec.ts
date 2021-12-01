import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashUpdateBusDetailsComponent } from './admin-dash-update-bus-details.component';

describe('AdminDashUpdateBusDetailsComponent', () => {
  let component: AdminDashUpdateBusDetailsComponent;
  let fixture: ComponentFixture<AdminDashUpdateBusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashUpdateBusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashUpdateBusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
