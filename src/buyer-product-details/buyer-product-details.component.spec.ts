import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerProductDetailsComponent } from './buyer-product-details.component';

describe('BuyerProductDetailsComponent', () => {
  let component: BuyerProductDetailsComponent;
  let fixture: ComponentFixture<BuyerProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
