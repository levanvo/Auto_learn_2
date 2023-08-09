import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrComponent } from './update-pr.component';

describe('UpdatePrComponent', () => {
  let component: UpdatePrComponent;
  let fixture: ComponentFixture<UpdatePrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePrComponent]
    });
    fixture = TestBed.createComponent(UpdatePrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
