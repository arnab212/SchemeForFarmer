import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveBiddersComponent } from './approve-bidders.component';

describe('ApproveBiddersComponent', () => {
  let component: ApproveBiddersComponent;
  let fixture: ComponentFixture<ApproveBiddersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveBiddersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
