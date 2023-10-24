import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { IConductor } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.page.html',
  styleUrls: ['./formulario2.page.scss'],
})
export class Formulario2Page implements OnInit {

  newConductor: IConductor = {
    id:0,
    username:'',
    email:'',
    edad:0,
    password:'',
    matricula: '',
    modelo: '',
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

  crearConductor(){
      this.apiCrud.CrearAnimalito(this.newConductor).subscribe();
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
