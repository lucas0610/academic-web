import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboard7Component } from './admin-dashboard7.component';

describe('AdminDashboard7Component', () => {
  let component: AdminDashboard7Component;
  let fixture: ComponentFixture<AdminDashboard7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboard7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboard7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
