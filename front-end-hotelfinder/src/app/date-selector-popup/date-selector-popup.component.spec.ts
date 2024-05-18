import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSelectorPopupComponent } from './date-selector-popup.component';

describe('DateSelectorPopupComponent', () => {
  let component: DateSelectorPopupComponent;
  let fixture: ComponentFixture<DateSelectorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateSelectorPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateSelectorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
