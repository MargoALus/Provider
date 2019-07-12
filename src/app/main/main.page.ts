import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  buttonClicked: Boolean = false;

  isButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
    console.log(this.buttonClicked);
  }

  navigateToMain() {
    this.navCtrl.navigateForward("rental");
  }
}
