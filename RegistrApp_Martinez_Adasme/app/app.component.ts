import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      
      icon: 'school',
      name: 'Alumno',
      redirecTo: '/alumno'
    
    },
    {

      icon: 'book',
      name: 'Docente',
      redirecTo: '/docente'
    },
    {
      icon: 'person',
      name: 'Registrate',
      redirecTo: '/action-sheet'
    },
   
  

   
  ];
  

}
