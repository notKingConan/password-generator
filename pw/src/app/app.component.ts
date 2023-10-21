import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string): void {
    const parsedValue = +value;
    if (Number.isNaN(parsedValue)) {
      console.log('not a number');
    } else if (!Number.isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let ValidChars = '';

    if (this.includeLetters) ValidChars += letters;
    if (this.includeNumbers) ValidChars += numbers;
    if (this.includeSymbols) ValidChars += symbols;

    let generatedPassword = '';

    // if (this.length > 0) {
    //   if (this.includeLetters || this.includeNumbers || this.includeSymbols) {
    //     for (let i = 0; i < this.length; i++) {
    //       const index = Math.floor(Math.random() * ValidChars.length);
    //       generatedPassword += ValidChars[index];
    //     }
    //     this.password = generatedPassword;
    //   }
    // } else {
    //   this.password = '';
    // }
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * ValidChars.length);
      generatedPassword += ValidChars[index];
    }
    this.password = generatedPassword;
  }
}
