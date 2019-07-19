import { Component, OnInit } from '@angular/core';
//impostamos el Modelo para uso de objeto
import { Conciliacion } from '../modelo/conciliaciones';
//importamos el servicio de residente
import { ConciliacionService } from '../../_services/conciliacion.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarConcComponent implements OnInit {

  listConciliaciones: Conciliacion[];
  pageActual:number=1;

  constructor(private conciliacionService: ConciliacionService) { }

  ngOnInit() {
    this.getConciliaciones();
  }

  getConciliaciones(): void {
    this.conciliacionService.getConciliaciones().subscribe(listCon => this.listConciliaciones = listCon);
  }

  postThis(data) {
    this.conciliacionService.postRequest(data)
        .subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('completed!')
        )
  }

}
