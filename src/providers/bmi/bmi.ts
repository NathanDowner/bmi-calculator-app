import { Injectable } from '@angular/core';
import { BMI } from '../../models/bmi.model';

@Injectable()
export class BmiProvider {

  constructor() {
    console.log('Hello BmiProvider Provider');
  }

  calculateBMI(height: number, weight: number): BMI {
    const BMI = weight / height / height;

    return <BMI>{
      BMI: BMI.toFixed(2),
      classification: this.classifyBMI(BMI)
    };
  }

  private classifyBMI(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi > 18.5 && bmi < 24.9) {
      return 'Normal Weight';
    } else if (bmi > 25 && bmi < 29.9) {
      return 'Overweight';
    } else if (bmi > 30 && bmi < 34.9){
      return 'Class 1 Obesity';
    } else if (bmi > 35 && bmi < 39.9) {
      return 'Class 2 Obesity';
    } else {
      return 'Class 3 Obesity. See a Gym';
    }
  }

}
