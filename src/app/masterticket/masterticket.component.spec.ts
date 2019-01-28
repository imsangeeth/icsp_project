import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterticketComponent } from './masterticket.component';

describe('MasterticketComponent', () => {
  let component: MasterticketComponent;
  let fixture: ComponentFixture<MasterticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
