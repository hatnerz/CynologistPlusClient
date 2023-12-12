import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBaseComponent } from './data-base.component';

describe('DataBaseComponent', () => {
  let component: DataBaseComponent;
  let fixture: ComponentFixture<DataBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBaseComponent]
    });
    fixture = TestBed.createComponent(DataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
