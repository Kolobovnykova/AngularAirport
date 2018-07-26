import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessListComponent } from './stewardess-list.component';

describe('StewardessListComponent', () => {
  let component: StewardessListComponent;
  let fixture: ComponentFixture<StewardessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
