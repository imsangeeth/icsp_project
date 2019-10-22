import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportoutboundComponent } from './reportoutbound.component';

describe('ReportoutboundComponent', () => {
  let component: ReportoutboundComponent;
  let fixture: ComponentFixture<ReportoutboundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportoutboundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportoutboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
