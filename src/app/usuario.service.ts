import { Injectable } from '@angular/core';

import { Usuario } from './usuario';

import { USUARIOSLIST } from './mock-usuarios';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<Usuario[]> {
    this.messageService.add('UsuarioService: listado de usuarios');
    return of(USUARIOSLIST);
  }
  
  //solo traemos un usuario detalle
  getUsuario(id: number): Observable<Usuario> {
    this.messageService.add(`UsuarioService: fetched usuario id=${id}`);
    return of(USUARIOSLIST.find(usuario => usuario.id === id));
  }
}
