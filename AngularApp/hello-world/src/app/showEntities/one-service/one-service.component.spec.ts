import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneServiceComponent } from './one-service.component';

describe('OneServiceComponent', () => {
  let component: OneServiceComponent;
  let fixture: ComponentFixture<OneServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
