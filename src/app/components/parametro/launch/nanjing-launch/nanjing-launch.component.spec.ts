import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanjingLaunchComponent } from './nanjing-launch.component';

describe('NanjingLaunchComponent', () => {
  let component: NanjingLaunchComponent;
  let fixture: ComponentFixture<NanjingLaunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NanjingLaunchComponent]
    });
    fixture = TestBed.createComponent(NanjingLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
