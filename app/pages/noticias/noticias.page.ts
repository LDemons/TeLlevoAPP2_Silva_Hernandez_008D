import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';
import { Articles } from '../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  articulos: Articles[]=[];

  constructor(private menuController: MenuController,
              private apisService: ApiService) { }

  ngOnInit() {
    this.apisService.getTopHeadLines().subscribe(resp =>{
      console.log(resp);
      this.articulos.push(...resp.articles);
    } )
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
