import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtviewComponent } from './ktview.component';

describe('KtviewComponent', () => {
  let component: KtviewComponent;
  let fixture: ComponentFixture<KtviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
