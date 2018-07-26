import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetypeListComponent } from './planetype-list.component';

describe('PlanetypeListComponent', () => {
  let component: PlanetypeListComponent;
  let fixture: ComponentFixture<PlanetypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
