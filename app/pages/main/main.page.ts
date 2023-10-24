import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  username: string | null = '';

  constructor(private router: Router,
              private toastController: ToastController ) {

    
   }

  ngOnInit() {

    this.username = sessionStorage.getItem('username');

  }


  cerrarSesion(){
    
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('ingresado');
    this.router.navigateByUrl('/alert');
    this.showToast('Sesión Cerrada');
  }

  async showToast(msg: any){
    const toast= await this.toastController.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }
  

}
