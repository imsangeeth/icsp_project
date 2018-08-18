import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecontactviewComponent } from './updatecontactview.component';

describe('UpdatecontactviewComponent', () => {
  let component: UpdatecontactviewComponent;
  let fixture: ComponentFixture<UpdatecontactviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecontactviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecontactviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
