import { Injectable } from '@angular/core';
import { Residente } from '../residentes/modelo/residente';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ResidenteService {

  constructor(
    private messageService: MessageService,
    private http:HttpClient
  ) { }

  uriAllItems='http://localhost/crud/getResidentes';
  getResidentes(): Observable<Residente[]> {
    return this.http.get<Residente[]>(this.uriAllItems);
  }

  postRequest(residente: Residente) : Observable<Residente>{
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       });
    let options = { headers: headers };
  
    this.messageService.add('Correo Enviado');
    
    return this.http.post<Residente>(`http://localhost/crud/sendMail?name=${residente.remail}&secondname=${residente.remail}&appat=${residente.remail}&apmat=${residente.remail}&bancocuenta=${residente.remail}&bancosucursal=${residente.remail}&bancoclave=${residente.remail}&bancoreferencia=${residente.remail}&folio=${residente.remail}&casa=${residente.remail}&manzana=${residente.remail}&propietario=${residente.remail}&privada=${residente.remail}&email=${residente.remail}`
    , residente, options)

    
  }

}
