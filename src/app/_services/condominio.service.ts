import{Injectable} from '@angular/core';
import{Condominio} from '../condominios/modelo/condominio';
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

export class CondominioService
{
  constructor(
    private messageService:MessageService,
    private http:HttpClient
  ){}

  uriAllItems='http://localhost:8080/crud/getCondominios';
  getCondominio(): Observable<Condominio[]>{
    return this.http.get<Condominio[]>(this.uriAllItems);
  }



}
