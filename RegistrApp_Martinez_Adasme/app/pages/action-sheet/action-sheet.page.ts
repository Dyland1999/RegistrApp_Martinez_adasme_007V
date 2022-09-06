import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  

  constructor(private menuController:MenuController,private alertController:AlertController) { }


  
  ngOnInit() {
  }

  registrousu = {
    name: '',
    email: '',
    password: '',
    number: ''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.registrousu);
  }

  async Mensaje(){
    const alert = await this.alertController.create({
      message: 'Registro exitoso',
      buttons: ['Salir'],
    })

    await alert.present();
  }
  };
