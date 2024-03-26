import { Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent {
  phoneNumber: string = '';

  constructor() { }
addDigit(digit: number) {
    if (this.phoneNumber.length < 10) {
      this.phoneNumber += digit;
    }
  }


}
