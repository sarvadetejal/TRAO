import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSeatingComponent } from './user-seating.component';

describe('UserSeatingComponent', () => {
  let component: UserSeatingComponent;
  let fixture: ComponentFixture<UserSeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSeatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
