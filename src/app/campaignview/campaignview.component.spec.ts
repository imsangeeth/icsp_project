import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignviewComponent } from './campaignview.component';

describe('CampaignviewComponent', () => {
  let component: CampaignviewComponent;
  let fixture: ComponentFixture<CampaignviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
