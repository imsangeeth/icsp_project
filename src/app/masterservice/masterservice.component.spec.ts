import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterserviceComponent } from './masterservice.component';

describe('MasterserviceComponent', () => {
  let component: MasterserviceComponent;
  let fixture: ComponentFixture<MasterserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
