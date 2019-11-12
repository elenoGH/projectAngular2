import { Component, OnInit } from '@angular/core';
//importamos el Modelo para uso de objeto
import { MCpmex } from '../../_modelos/mcpmex';
//importamos el servicio
import { CpmexicoService } from '../../_services/cpmexico.service';

import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-cpmlistar',
  templateUrl: './cpmlistar.component.html',
  styleUrls: ['./cpmlistar.component.css']
})
export class CpmlistarComponent implements OnInit {


  //componentes para subir archivo
  seleccionaArchivo: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }

  constructor(private cpmexicoService : CpmexicoService) { }

  ngOnInit() {
  }

  //funciones para subir archivo al servidor
  selectFile(event) {
    this.seleccionaArchivo = event.target.files;
  }

  subirArchivo() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.seleccionaArchivo.item(0)
    this.cpmexicoService.empujarArchivoAServidor(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('Se subio el archivo de Codigos Postales de Mexico correctamente!');
      }
    })
 
    this.seleccionaArchivo = undefined
  }

}
