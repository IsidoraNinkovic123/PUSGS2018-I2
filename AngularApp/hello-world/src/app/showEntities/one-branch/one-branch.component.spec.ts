import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBranchComponent } from './one-branch.component';

describe('OneBranchComponent', () => {
  let component: OneBranchComponent;
  let fixture: ComponentFixture<OneBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
