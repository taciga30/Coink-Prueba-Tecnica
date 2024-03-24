import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastStepRegisterPage } from './last-step-register.page';

describe('LastStepRegisterPage', () => {
  let component: LastStepRegisterPage;
  let fixture: ComponentFixture<LastStepRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LastStepRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
