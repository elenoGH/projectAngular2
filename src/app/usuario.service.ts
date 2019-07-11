import { Injectable } from '@angular/core';

import { Usuario } from './usuario';

import { USUARIOSLIST } from './mock-usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsers(): Usuario[] {
    return USUARIOSLIST;
  }
  
}
