import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboard5Component } from './admin-dashboard5.component';

describe('AdminDashboard5Component', () => {
  let component: AdminDashboard5Component;
  let fixture: ComponentFixture<AdminDashboard5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboard5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
