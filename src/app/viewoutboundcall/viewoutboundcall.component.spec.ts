import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoutboundcallComponent } from './viewoutboundcall.component';

describe('ViewoutboundcallComponent', () => {
  let component: ViewoutboundcallComponent;
  let fixture: ComponentFixture<ViewoutboundcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewoutboundcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewoutboundcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
