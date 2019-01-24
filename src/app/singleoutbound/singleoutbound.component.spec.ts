import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleoutboundComponent } from './singleoutbound.component';

describe('SingleoutboundComponent', () => {
  let component: SingleoutboundComponent;
  let fixture: ComponentFixture<SingleoutboundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleoutboundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleoutboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
