import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepOneRegisterPage } from './step-one-register.page';

describe('StepOneRegisterPage', () => {
  let component: StepOneRegisterPage;
  let fixture: ComponentFixture<StepOneRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StepOneRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
