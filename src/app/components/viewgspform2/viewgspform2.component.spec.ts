import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewgspform2Component } from './viewgspform2.component';

describe('Viewgspform2Component', () => {
  let component: Viewgspform2Component;
  let fixture: ComponentFixture<Viewgspform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewgspform2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewgspform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
