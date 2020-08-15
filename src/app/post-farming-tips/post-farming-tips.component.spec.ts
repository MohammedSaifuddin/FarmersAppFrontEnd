import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFarmingTipsComponent } from './post-farming-tips.component';

describe('PostFarmingTipsComponent', () => {
  let component: PostFarmingTipsComponent;
  let fixture: ComponentFixture<PostFarmingTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFarmingTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFarmingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
