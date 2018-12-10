import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterktComponent } from './masterkt.component';

describe('MasterktComponent', () => {
  let component: MasterktComponent;
  let fixture: ComponentFixture<MasterktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
