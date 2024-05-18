import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilteringExample } from './table-with-filtering.component';

describe('TableWithFilteringComponent', () => {
  let component: TableFilteringExample;
  let fixture: ComponentFixture<TableFilteringExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFilteringExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFilteringExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
