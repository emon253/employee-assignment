import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewgsp2Component } from './viewgsp2.component';

describe('Viewgsp2Component', () => {
  let component: Viewgsp2Component;
  let fixture: ComponentFixture<Viewgsp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewgsp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewgsp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
