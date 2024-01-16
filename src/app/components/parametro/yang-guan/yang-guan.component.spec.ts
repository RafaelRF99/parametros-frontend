import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YangGuanComponent } from './yang-guan.component';

describe('YangGuanComponent', () => {
  let component: YangGuanComponent;
  let fixture: ComponentFixture<YangGuanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YangGuanComponent]
    });
    fixture = TestBed.createComponent(YangGuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
