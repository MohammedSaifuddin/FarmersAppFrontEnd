import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRequiredCropComponent } from './single-required-crop.component';

describe('SingleRequiredCropComponent', () => {
  let component: SingleRequiredCropComponent;
  let fixture: ComponentFixture<SingleRequiredCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRequiredCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRequiredCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
