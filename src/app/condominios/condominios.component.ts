import { Component, OnInit } from '@angular/core';
import {Condominio} from './modelo/Condominio';

import{CondominioService} from '../_services/Condominio.service';

@Component({
  selector: 'app-condominios',
  templateUrl: './condominios.component.html',
  styleUrls: ['./condominios.component.css']
})
export class CondominiosComponent implements OnInit {
condominio_:Condominio[];
  constructor(private condominioService: CondominioService) { }
pageActual:number = 1;

  ngOnInit() {
    this.getCondominio();
  }

  getCondominio():void{
    this.condominioService.getCondominio().subscribe(condominio_=>this.condominio_ = condominio_);
  }

}
