import{Injectable} from '@angular/core';
import{Viviendas} from '../Viviendas/modelo/viviendas';
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

export class ViviendasService
{
  constructor(
    private messageService:MessageService,
    private http:HttpClient
  ){}

  uriAllItems='http://localhost:8080/crud/getViviendas';
  getViviendas(): Observable<Viviendas[]>{
    return this.http.get<Viviendas[]>(this.uriAllItems);
  }



}
