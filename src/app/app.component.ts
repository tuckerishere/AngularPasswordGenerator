import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
password :string = '';
passwordLength :number = 0;
includeLetters :boolean= false;
includeNumbers :boolean= false;
includeSymbols :boolean= false;

  onButtonClick() {
    const numbers:string = '1234567890';
    const letters:string = 'abcdefghijklmnopqrstuvwxyz';
    const symbols:string = '!@#$%^&*()';

    let validChars:string = '';
    if(this.includeLetters) {
      validChars += letters;
    }

    if(this.includeNumbers) {
      validChars += numbers;
    }

    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword:string = '';
    for(let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
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

  onChangeLength(value:string) {
    const parsedValue = parseInt(value)
    if(!isNaN(parsedValue)){
      this.passwordLength = parsedValue;
      
    }
  }

}
