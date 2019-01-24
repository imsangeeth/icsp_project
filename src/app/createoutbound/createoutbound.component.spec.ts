import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateoutboundComponent } from './createoutbound.component';

describe('CreateoutboundComponent', () => {
  let component: CreateoutboundComponent;
  let fixture: ComponentFixture<CreateoutboundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateoutboundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateoutboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
