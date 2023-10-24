import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { IUsuario } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  newUsuario: IUsuario = {
    id:0,
    username:'',
    email:'',
    edad:0,
    password:'',
    jornada: true,
    isactive: true,
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private apiCrud: ApiCrudService,
              private toastController: ToastController,
              private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  crearUsuario(){
      this.apiCrud.CrearAnimalito(this.newUsuario).subscribe();
      this.showToast('Registrado');
      this.router.navigateByUrl("/inicio");
  }

  
  async showToast(msg: any){
    const toast= await this.toastController.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }
}


