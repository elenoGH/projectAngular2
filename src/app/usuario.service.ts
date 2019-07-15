import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { USUARIOSLIST } from './mock-usuarios';
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
  /**
  *las siguientes funciones son para el envio de datos por URL
  *si no sirve, borra por el momento
  * ejemplo en: https://www.competa.com/blog/get-and-post-request-angular-4-3/
  * seguir ejemplo https://www.devglan.com/spring-boot/spring-boot-angular-example
  * para envo de parametros
  */
  
  
  postRequest(usuario: Usuario) : Observable<Usuario>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       });
    let options = { headers: headers };
  
    return this.http.post<Usuario>(`http://localhost/crud/sendMail?correo=${usuario.email}&noacount=${usuario.bancocuenta}&clavebanc=${usuario.bancoclave}&nameuser=${usuario.name}`
    , usuario, options)
  }

}
