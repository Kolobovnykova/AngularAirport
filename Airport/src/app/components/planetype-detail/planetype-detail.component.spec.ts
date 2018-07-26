import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetypeDetailComponent } from './planetype-detail.component';

describe('PlanetypeDetailComponent', () => {
  let component: PlanetypeDetailComponent;
  let fixture: ComponentFixture<PlanetypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
