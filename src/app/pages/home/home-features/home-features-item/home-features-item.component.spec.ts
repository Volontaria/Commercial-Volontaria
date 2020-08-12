import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturesItemComponent } from './home-features-item.component';

describe('HomeFeaturesItemComponent', () => {
  let component: HomeFeaturesItemComponent;
  let fixture: ComponentFixture<HomeFeaturesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFeaturesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeaturesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
