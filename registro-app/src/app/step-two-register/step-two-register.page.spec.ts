import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepTwoRegisterPage } from './step-two-register.page';

describe('StepTwoRegisterPage', () => {
  let component: StepTwoRegisterPage;
  let fixture: ComponentFixture<StepTwoRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StepTwoRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
