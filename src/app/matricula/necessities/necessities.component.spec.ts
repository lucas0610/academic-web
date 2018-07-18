import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecessitiesComponent } from './necessities.component';

describe('NecessitiesComponent', () => {
  let component: NecessitiesComponent;
  let fixture: ComponentFixture<NecessitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecessitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecessitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
