import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleserviceviewComponent } from './singleserviceview.component';

describe('SingleserviceviewComponent', () => {
  let component: SingleserviceviewComponent;
  let fixture: ComponentFixture<SingleserviceviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleserviceviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleserviceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
