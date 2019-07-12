import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsuarioService }  from '../usuario.service';

import { Usuario } from '../usuario'

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  @Input() userItem: Usuario;
  
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUsuario();
  }
  
  getUsuario(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(id).subscribe(userIt => this.userItem = userIt);
    
  }

}
