import { Component, OnInit } from '@angular/core';
//impostamos el Modelo para uso de objeto
import { Conciliacion } from '../modelo/conciliaciones';
//importamos el servicio de residente
import { ConciliacionService } from '../../_services/conciliacion.service';

import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarConcComponent implements OnInit {

  listConciliaciones: Conciliacion[];
  pageActual:number=1;

  //upload files
  showFile = false
  fileUploads: Observable<string[]>

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }

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
  
 //upload files
  showFiles(enable: boolean) {
    this.showFile = enable
 
    if (enable) {
      this.fileUploads = this.conciliacionService.getFiles();
    }
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0)
    this.conciliacionService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })
 
    this.selectedFiles = undefined
  }

}
