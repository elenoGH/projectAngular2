import { Component, OnInit } from '@angular/core';
//impostamos el Modeklo para uso de objeto
import { Residente } from '../modelo/residente';
//importamos el servicio de residente
import { ResidenteService } from '../../_services/residente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarRecComponent implements OnInit {

  listResidentes: Residente[];

  constructor(private residenteService: ResidenteService) { }

  ngOnInit() {
    this.getResidentes();
  }

  getResidentes(): void {
    this.residenteService.getResidentes().subscribe(listRes => this.listResidentes = listRes);
  }

}
