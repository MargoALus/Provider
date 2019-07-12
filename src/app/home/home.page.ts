import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  buttonClicked: Boolean = false;

  constructor(private navCtrl: NavController) {}

  isButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
    console.log(this.buttonClicked);
  }

  navigateToMain() {
    this.navCtrl.navigateForward("main");
  }

}
