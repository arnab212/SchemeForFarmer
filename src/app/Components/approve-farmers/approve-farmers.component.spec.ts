import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveFarmersComponent } from './approve-farmers.component';

describe('ApproveFarmersComponent', () => {
  let component: ApproveFarmersComponent;
  let fixture: ComponentFixture<ApproveFarmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveFarmersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveFarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
