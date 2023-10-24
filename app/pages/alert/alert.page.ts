import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  userdata:any;

  usuario={
    id:'',
    username:'',
    email:'',
    edad:0,
    password:'',
    jornada: true,
    isactive: true
  }

  loginForm :FormGroup;

  constructor(private authservice: AuthService,
      private menuController: MenuController,
      private router: Router,
      private alertController: AlertController, 
      private toastController: ToastController, 
      private builder: FormBuilder){
        this.loginForm = this.builder.group({
          'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
          'password': new FormControl("", [Validators.required, Validators.minLength(4)])
        })
      }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  login(){
    if (this.loginForm.valid){
      this.authservice.GetUserById(this.loginForm.value.username).subscribe( resp =>{ 
        this.userdata=resp;
        console.log(this.userdata);
        if (this.userdata.length>0){    
          this.usuario={                
            id : this.userdata[0].id,
            username: this.userdata[0].username,
            email: this.userdata[0].email,
            edad: this.userdata[0].edad,
            password: this.userdata[0].password,
            jornada: this.userdata[0].jornada,
            isactive: this.userdata[0].isactive
          }
          if (this.usuario.password===this.loginForm.value.password){
            if (this.usuario.isactive){
              //iniciamos sesión del usuario 
              sessionStorage.setItem('username', this.usuario.username);
              sessionStorage.setItem('ingresado', 'true');
              this.loginForm.reset();
              //Alerta con toast
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl("/main");
            }
            else{
              this.UserInactivo();
              this.loginForm.reset();
            }
          }
          else{
            this.DatoError();
            this.loginForm.reset();
          }
        }
        else{
          this.NoExiste();
          this.loginForm.reset();
        }

      })

    }
    }//login
    async showToast(msg: any){
      const toast= await this.toastController.create({
        message:msg,
        duration: 3000
      })
      toast.present();
    }
  
    async UserInactivo(){
      const alerta = await this.alertController.create({ 
        header: 'Error..',
        message: 'Usuario inactivo, contactar a admin@admin.cl',
        buttons: ['Ok']
      });
      alerta.present();
      return;
    }
  
    async DatoError(){
      const alerta = await this.alertController.create({ 
        header: 'Error..',
        message: 'Revise sus credenciales',
        buttons: ['Ok']
      });
      alerta.present();
      return;
    }
  
    async NoExiste(){
      const alerta = await this.alertController.create({ 
        header: 'Debe registrarse..',
        message: 'Usuario no existe',
        buttons: ['Ok']
      });
      alerta.present();
      return;
    }
  
  
  
  }



