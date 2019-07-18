import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../../_services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarioslist_: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usuarioService.getUsers().subscribe(usuarioslist_ => this.usuarioslist_ = usuarioslist_.slice(1, 5));
    
  }
}
