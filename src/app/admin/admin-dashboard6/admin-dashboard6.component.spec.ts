import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboard6Component } from './admin-dashboard6.component';

describe('AdminDashboard6Component', () => {
  let component: AdminDashboard6Component;
  let fixture: ComponentFixture<AdminDashboard6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboard6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
