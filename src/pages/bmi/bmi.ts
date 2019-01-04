import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BmiProvider } from '../../providers/bmi/bmi';
import { BMI } from '../../models/bmi.model';

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {

  height: number;
  weight: number;
  BMI: BMI;

  constructor(private bmiProvider: BmiProvider, private navCtrl: NavController) {
  }

  calcBMI(height: number, weight: number) {
    this.BMI =  this.bmiProvider.calculateBMI(height, weight);
  }

  goToNext(): void{
   this.navCtrl.push("SecondPage")
  }

}
