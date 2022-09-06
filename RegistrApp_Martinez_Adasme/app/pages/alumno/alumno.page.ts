import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {



  constructor(private menuController:MenuController) {}

  ngOnInit() {
  }




  usuarioalu = {
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuarioalu);
  }
}