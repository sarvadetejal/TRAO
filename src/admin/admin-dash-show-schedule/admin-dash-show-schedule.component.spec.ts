import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashShowScheduleComponent } from './admin-dash-show-schedule.component';

describe('AdminDashShowScheduleComponent', () => {
  let component: AdminDashShowScheduleComponent;
  let fixture: ComponentFixture<AdminDashShowScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashShowScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashShowScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
