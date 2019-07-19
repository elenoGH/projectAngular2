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

}
