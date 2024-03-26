import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-one-register',
  templateUrl: './step-one-register.page.html',
  styleUrls: ['./step-one-register.page.scss'],
})
export class StepOneRegisterPage implements OnInit {
[x: string]: any;

@Output() numberEntered = new EventEmitter<number>();



  constructor() { }
  enterNumber(num: number) {
    this.numberEntered.emit(num);
  }
  
  ngOnInit() {
  }

}
