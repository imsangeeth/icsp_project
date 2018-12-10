import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterassignComponent } from './masterassign.component';

describe('MasterassignComponent', () => {
  let component: MasterassignComponent;
  let fixture: ComponentFixture<MasterassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
