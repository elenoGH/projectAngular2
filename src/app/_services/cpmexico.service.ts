import { Injectable } from '@angular/core';
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

export class CpmexicoService {

  constructor(
    private messageService: MessageService,
    private http:HttpClient
  ) { }

  //upload files service
  empujarArchivoAServidor(archivo: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
 
    //arcivo y nombre de parametro que resivira spring boot(servicio restfull java)
    //estos archivos se subiran en una carpeta que crea el servicio en el servidor
    formdata.append('archivo_', archivo);
 
    const req = new HttpRequest('POST', 'http://localhost/crud/subirArchivoServidorController', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
}
