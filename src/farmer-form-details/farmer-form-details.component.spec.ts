import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerFormDetailsComponent } from './farmer-form-details.component';

describe('FarmerFormDetailsComponent', () => {
  let component: FarmerFormDetailsComponent;
  let fixture: ComponentFixture<FarmerFormDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerFormDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
