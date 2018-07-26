import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureDetailComponent } from './departure-detail.component';

describe('DepartureDetailComponent', () => {
  let component: DepartureDetailComponent;
  let fixture: ComponentFixture<DepartureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
