import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropSoldHistoryComponent } from './crop-sold-history.component';

describe('CropSoldHistoryComponent', () => {
  let component: CropSoldHistoryComponent;
  let fixture: ComponentFixture<CropSoldHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropSoldHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropSoldHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
