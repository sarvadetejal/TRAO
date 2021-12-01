import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashAddBusDetailsComponent } from './admin-dash-add-bus-details.component';

describe('AdminDashAddBusDetailsComponent', () => {
  let component: AdminDashAddBusDetailsComponent;
  let fixture: ComponentFixture<AdminDashAddBusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashAddBusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashAddBusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
