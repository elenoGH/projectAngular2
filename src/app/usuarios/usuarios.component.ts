import { Component, OnInit } from '@angular/core';
//importamos Clase de usuarios.ts que esta fuera de /app/
import { Usuario } from '../usuario';
//importamos el mock(usuarios hard-code list) de USUARIOS
import { USUARIOSLIST } from '../mock-usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  
  /*usuario = 'Windstorm';*/
  /*usuario: Usuario = {
    id: 1,
    name: 'Martin Eleno'
  };*/

  //traemos la lista de usuarios
  usuarioslist_ = USUARIOSLIST;

  //agregamos eventos tipo  --event binding syntax.
  selectedUsuario: Usuario;
 
  constructor() { }

  ngOnInit() {
  }

  onSelectector(usuario: Usuario): void {
    this.selectedUsuario = usuario;
  }

}
