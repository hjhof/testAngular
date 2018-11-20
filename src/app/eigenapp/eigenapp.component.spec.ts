import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigenappComponent } from './eigenapp.component';

describe('EigenappComponent', () => {
  let component: EigenappComponent;
  let fixture: ComponentFixture<EigenappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigenappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigenappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
