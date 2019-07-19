import { Component, OnInit } from '@angular/core';
import{Viviendas} from './modelo/Viviendas';
import{ViviendasService} from '../_services/viviendas.service';

@Component({
  selector: 'app-viviendas',
  templateUrl: './viviendas.component.html',
  styleUrls: ['./viviendas.component.css']
})
export class ViviendasComponent implements OnInit {

viviendas_:Viviendas[];

  constructor(private viviendasService: ViviendasService) {}
  pageActual:number=1;

  ngOnInit() {
    this.getViviendas();
  }

  getViviendas():void{
    this.viviendasService.getViviendas().subscribe(viviendas_=>this.viviendas_= viviendas_);
  }

}
