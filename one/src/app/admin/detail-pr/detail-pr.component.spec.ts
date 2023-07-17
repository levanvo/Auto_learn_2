import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPrComponent } from './detail-pr.component';

describe('DetailPrComponent', () => {
  let component: DetailPrComponent;
  let fixture: ComponentFixture<DetailPrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPrComponent]
    });
    fixture = TestBed.createComponent(DetailPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
