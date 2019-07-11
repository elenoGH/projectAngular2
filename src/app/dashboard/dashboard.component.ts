import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

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
