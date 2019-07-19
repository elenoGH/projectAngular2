import { Injectable } from '@angular/core';
import { Conciliacion } from '../conciliaciones/modelo/conciliaciones';

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
export class ConciliacionService {

  constructor(
    private messageService: MessageService,
    private http:HttpClient
  ) { }

  uriAllItems='http://localhost:8080/crud/getConciliacion';
  getConciliaciones(): Observable<Conciliacion[]> {
    return this.http.get<Conciliacion[]>(this.uriAllItems);
  }

  postRequest(conciliacion: Conciliacion) : Observable<Conciliacion>{

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       });
    let options = { headers: headers };

    this.messageService.add('Correo Enviado');

    return this.http.post<Conciliacion>(`http://localhost/crud/sendMail?name=${conciliacion.cemail}&secondname=${conciliacion.cemail}&appat=${conciliacion.cemail}&apmat=${conciliacion.cemail}&bancocuenta=${conciliacion.cemail}&bancosucursal=${conciliacion.cemail}&bancoclave=${conciliacion.cemail}&bancoreferencia=${conciliacion.cemail}&folio=${conciliacion.cemail}&casa=${conciliacion.cemail}&manzana=${conciliacion.cemail}&propietario=${conciliacion.cemail}&privada=${conciliacion.cemail}&email=${conciliacion.cemail}`
    , conciliacion, options)


  }
}
