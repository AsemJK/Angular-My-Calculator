import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  calVal: number = 0;
  funT: any = 'No Function';
  calNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  total: number = 0;

  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    }
    else if (type == 'function')
      this.onFunctionClick(val);


  }

  onNumberClick(val: string) {
    if (this.calNumber != 'noValue')
      this.calNumber = this.calNumber + val;
    else
      this.calNumber = val;

    this.calVal = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (this.funT == 'No Function') {

      this.firstNumber = this.calVal;
      this.calVal = 0;
      this.calNumber = 'noValue'
      this.funT = val;
    }
    else if (this.funT != 'No Function') {
      //second operation
      this.secondNumber = this.calVal;
      // do the value calc
      this.valueCalculation(val);

    }
    if (val == 'c') {
      this.calNumber = 'noValue'
      this.calVal = 0;
      this.funT = val;
      this.funT = 'No Function';
    }
  }

  valueCalculation(val: string) {
    this.total = 0;
    //val here if the function
    switch (this.funT) {
      case "+":
        this.total = this.firstNumber + this.secondNumber;
        this.assignTotalValue(this.total, val);
        if (val == '=') this.onEqualPress();
        break;
      case "-":
        this.total = this.firstNumber - this.secondNumber;
        this.assignTotalValue(this.total, val);
        if (val == '=') this.onEqualPress();
        break;
        case "*":
        this.total = this.firstNumber * this.secondNumber;
        this.assignTotalValue(this.total, val);
        if (val == '=') this.onEqualPress();
        break;
        case "/":
          this.total = this.firstNumber / this.secondNumber;
          this.assignTotalValue(this.total, val);
          if (val == '=') this.onEqualPress();
          break;
          case "%":
            this.total = this.firstNumber % this.secondNumber;
            this.assignTotalValue(this.total, val);
            if (val == '=') this.onEqualPress();
            break;
    }
  }
  assignTotalValue(Total: number, val: string) {
    this.calVal = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funT = val;
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funT = 'No Function';
    this.calNumber = 'noValue';
  }
}
