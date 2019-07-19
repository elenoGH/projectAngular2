import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/modelo/usuario';
//import { USUARIOSLIST } from './mock-usuarios';
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



  uriAllItems='http://localhost:8080/crud/getUsuarios';
  getUsers(): Observable<Usuario[]> {
    //this.messageService.add('UsuarioService: listado de usuarios');
    //return of(USUARIOSLIST);
    return this.http.get<Usuario[]>(this.uriAllItems);
  }

  //solo traemos un usuario detalle
  getUsuario(id: number): Observable<Usuario> {
    //this.messageService.add(`UsuarioService: fetched usuario id=${id}`);
    //return of(USUARIOSLIST.find(usuario => usuario.id === id));
    return this.getUsers().map(usuarios => usuarios.find(usuario => usuario.uidusuario == id));
  }
/*
  postRequest(usuario: Usuario) : Observable<Usuario>{

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       });
    let options = { headers: headers };

    this.messageService.add('Correo Enviado');

    return this.http.post<Usuario>(`http://localhost/crud/sendMail?name=${usuario.name}&secondname=${usuario.secondname}&appat=${usuario.appat}&apmat=${usuario.apmat}&bancocuenta=${usuario.bancocuenta}&bancosucursal=${usuario.bancosucursal}&bancoclave=${usuario.bancoclave}&bancoreferencia=${usuario.bancoreferencia}&folio=${usuario.folio}&casa=${usuario.casa}&manzana=${usuario.manzana}&propietario=${usuario.propietario}&privada=${usuario.privada}&email=${usuario.email}`
    , usuario, options)


  }
*/
  /***servicios para registro de usuario***/
  getAll() {
      return this.http.get<Usuario[]>(`/users`);
  }

  getById(id: number) {
      return this.http.get(`/users/` + id);
  }

  register(user: Usuario) {
      return this.http.post(`/users/register`, user);
  }

  update(user: Usuario) {
      return this.http.put(`/users/` + user.uidusuario, user);
  }

  delete(id: number) {
      return this.http.delete(`/users/` + id);
  }

}
