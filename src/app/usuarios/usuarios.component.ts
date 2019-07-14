import { Component, OnInit } from '@angular/core';
//importamos Clase de usuarios.ts que esta fuera de /app/
import { Usuario } from '../usuario';
//importamos el mock(usuarios hard-code list) de USUARIOS
import { USUARIOSLIST } from '../mock-usuarios';
import { Subscriber } from 'rxjs';

import { UsuarioService } from '../usuario.service';

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
  //usuarioslist_ = USUARIOSLIST;
  usuarioslist_: Usuario[];

  //agregamos eventos tipo  --event binding syntax.
  //selectedUsuario: Usuario;
 
  constructor(private usuarioService: UsuarioService) { }
  

  ngOnInit() {
    this.getUsers();
  }
/*
  onSelectector(usuario: Usuario): void {
    this.selectedUsuario = usuario;
  }
*/
  getUsers(): void {
    this.usuarioService.getUsers().subscribe(usuarioslist_ => this.usuarioslist_ = usuarioslist_);
  }

  /**
  *las siguientes funciones son para el envio de datos por URL
  *si no sirve, borra por el momento
  * ejemplo en: https://www.competa.com/blog/get-and-post-request-angular-4-3/
  * seguir ejemplo https://www.devglan.com/spring-boot/spring-boot-angular-example
  * para envo de parametros
  */
  
  /*
  postRequest(data) {
    return this.http.post('http://localhost/crud/', data)
  }

  postThis(data) {
    this.UsuarioService.postRequest(data)
        .subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('completed!')
        )
  }
  */

}
