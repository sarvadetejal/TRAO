import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashAddScheduleComponent } from './admin-dash-add-schedule.component';

describe('AdminDashAddScheduleComponent', () => {
  let component: AdminDashAddScheduleComponent;
  let fixture: ComponentFixture<AdminDashAddScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashAddScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashAddScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
