import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationForLoginComponent } from './registration-for-login.component';

describe('RegistrationForLoginComponent', () => {
  let component: RegistrationForLoginComponent;
  let fixture: ComponentFixture<RegistrationForLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationForLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationForLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
