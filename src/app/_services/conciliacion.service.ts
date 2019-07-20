import { Injectable } from '@angular/core';
import { Conciliacion } from '../conciliaciones/modelo/conciliaciones';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders , HttpRequest, HttpEvent} from '@angular/common/http';
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

  uriAllItems='http://localhost/crud/getConciliacion';
  getConciliaciones(): Observable<Conciliacion[]> {
    return this.http.get<Conciliacion[]>(this.uriAllItems);
  }

  postRequest(conciliacion: Conciliacion) : Observable<Conciliacion>{

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       });
    let options = { headers: headers };

    this.messageService.add('Correo Enviado');

    return this.http.post<Conciliacion>(`http://localhost/crud/sendMail?name=${conciliacion.cnomresidente}&secondname=&appat=&apmat=&bancocuenta=${conciliacion.ccveref}&bancosucursal=&bancoclave=${conciliacion.ccvestat}&bancoreferencia=${conciliacion.ccveref}&folio=&casa=&manzana=&propietario=${conciliacion.cnomresidente}&privada=&email=${conciliacion.cemail}`
    , conciliacion, options)


  }

  //upload files service
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', 'http://localhost/crud/postFileUpload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
 
  getFiles(): Observable<string[]> {
    return this.http.get<string[]>('/getallfiles');
  }

}
