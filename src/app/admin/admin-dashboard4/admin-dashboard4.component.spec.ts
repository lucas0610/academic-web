/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminDashboard4Component } from './admin-dashboard4.component';

describe('AdminDashboard4Component', () => {
  let component: AdminDashboard4Component;
  let fixture: ComponentFixture<AdminDashboard4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboard4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
