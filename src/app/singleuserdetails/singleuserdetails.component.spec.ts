import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleuserdetailsComponent } from './singleuserdetails.component';

describe('SingleuserdetailsComponent', () => {
  let component: SingleuserdetailsComponent;
  let fixture: ComponentFixture<SingleuserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleuserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
