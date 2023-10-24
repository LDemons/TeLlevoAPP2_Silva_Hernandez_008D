import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[]=[
    {
      name:'Inicio',
      redirecTo: '/inicio',
      icon:'car-sport-outline'
    },
    {
      name:'Login',
      redirecTo: '/alert',
      icon:'log-in-outline'
    },
    {
      name:'Registro',
      redirecTo: '/formulario',
      icon:'clipboard-outline'
    },
    /*{
      name:'Noticias',
      redirecTo: '/noticias',
      icon:'newspaper-outline'
    }, */
    {
      name:'Info',
      redirecTo: '/card',
      icon:'help-circle-outline'
    },

  ]



  constructor() {}
}
