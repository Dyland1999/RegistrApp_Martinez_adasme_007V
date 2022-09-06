import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-olvcont',
  templateUrl: './olvcont.page.html',
  styleUrls: ['./olvcont.page.scss'],
})
export class OlvcontPage implements OnInit {


  constructor(private menuController:MenuController, private alertController:AlertController) { }

  ngOnInit() {
  }
contra = {
  password:''
  
}
onSubmit(){
  console.log('submit');
  console.log(this.contra);
}
async Mensaje(){
  const alert = await this.alertController.create({
    message: 'Contraseña recuperada',
    buttons: ['Salir'],
  })

  await alert.present();
}
};



