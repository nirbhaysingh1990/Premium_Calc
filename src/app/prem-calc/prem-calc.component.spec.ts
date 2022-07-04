import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremCalcComponent } from './prem-calc.component';

describe('PremCalcComponent', () => {
  let component: PremCalcComponent;
  let fixture: ComponentFixture<PremCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
