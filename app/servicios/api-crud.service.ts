import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuarios } from '../pages/interfaces/interfaces';
import { IConductor } from '../pages/interfaces/interfaces';
import { ICondutors } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  CrearAnimalito(newUsuario: IUsuario): Observable<IUsuario>{
    return this.httpclient.post<IUsuarios>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  CrearConductor(newConductor: IConductor): Observable<IConductor>{
    return this.httpclient.post<ICondutors>(`${environment.apiUrl}/usuarios`, newConductor);
  }
}
