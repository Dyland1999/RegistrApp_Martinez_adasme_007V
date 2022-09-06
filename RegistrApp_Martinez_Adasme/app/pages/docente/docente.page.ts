import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  
  constructor(private menuController:MenuController) {}

  ngOnInit() {
  }


  usuariodoc = {
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuariodoc);
  }
}