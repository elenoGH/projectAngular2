import { Component, OnInit } from '@angular/core';
//importamos Clase de usuarios.ts que esta fuera de /app/
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  
  /*usuario = 'Windstorm';*/
  usuario: Usuario = {
    id: 1,
    name: 'Martin Eleno'
  };

  constructor() { }

  ngOnInit() {
  }

}
