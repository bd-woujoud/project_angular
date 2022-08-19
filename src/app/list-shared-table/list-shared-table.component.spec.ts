import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSharedTableComponent } from './list-shared-table.component';

describe('ListSharedTableComponent', () => {
  let component: ListSharedTableComponent;
  let fixture: ComponentFixture<ListSharedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSharedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSharedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
