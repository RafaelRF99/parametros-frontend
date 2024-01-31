import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YangGuanLaunchComponent } from './yang-guan-launch.component';

describe('YangGuanLaunchComponent', () => {
  let component: YangGuanLaunchComponent;
  let fixture: ComponentFixture<YangGuanLaunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YangGuanLaunchComponent]
    });
    fixture = TestBed.createComponent(YangGuanLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
