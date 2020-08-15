import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComplaintsPageComponent } from './post-complaints-page.component';

describe('PostComplaintsPageComponent', () => {
  let component: PostComplaintsPageComponent;
  let fixture: ComponentFixture<PostComplaintsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComplaintsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComplaintsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
