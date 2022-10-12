import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgspComponent } from './viewgsp.component';

describe('ViewgspComponent', () => {
  let component: ViewgspComponent;
  let fixture: ComponentFixture<ViewgspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewgspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
