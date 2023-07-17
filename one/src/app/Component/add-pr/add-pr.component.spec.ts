import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrComponent } from './add-pr.component';

describe('AddPrComponent', () => {
  let component: AddPrComponent;
  let fixture: ComponentFixture<AddPrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPrComponent]
    });
    fixture = TestBed.createComponent(AddPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
