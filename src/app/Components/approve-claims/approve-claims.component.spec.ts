import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveClaimsComponent } from './approve-claims.component';

describe('ApproveClaimsComponent', () => {
  let component: ApproveClaimsComponent;
  let fixture: ComponentFixture<ApproveClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveClaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
