import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCropRequiementsComponent } from './farmer-crop-requiements.component';

describe('FarmerCropRequiementsComponent', () => {
  let component: FarmerCropRequiementsComponent;
  let fixture: ComponentFixture<FarmerCropRequiementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerCropRequiementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerCropRequiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
