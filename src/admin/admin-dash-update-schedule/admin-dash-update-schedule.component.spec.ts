import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashUpdateScheduleComponent } from './admin-dash-update-schedule.component';

describe('AdminDashUpdateScheduleComponent', () => {
  let component: AdminDashUpdateScheduleComponent;
  let fixture: ComponentFixture<AdminDashUpdateScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashUpdateScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashUpdateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
