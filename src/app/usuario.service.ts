import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { USUARIOSLIST } from './mock-usuarios';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private messageService: MessageService,
    private http:HttpClient
    ) { }


  uriAllItems='http://localhost/crud/getUsuarioss';
  getUsers(): Observable<Usuario[]> {
    //this.messageService.add('UsuarioService: listado de usuarios');
    //return of(USUARIOSLIST);
    return this.http.get<Usuario[]>(this.uriAllItems);
  }
  
  //solo traemos un usuario detalle
  getUsuario(id: number): Observable<Usuario> {
    //this.messageService.add(`UsuarioService: fetched usuario id=${id}`);
    //return of(USUARIOSLIST.find(usuario => usuario.id === id));
    return this.getUsers().map(usuarios => usuarios.find(usuario => usuario.id == id));
  }
}
