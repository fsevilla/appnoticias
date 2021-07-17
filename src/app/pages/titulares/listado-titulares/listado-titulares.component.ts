import { Component, OnInit } from '@angular/core';

import { Noticia } from 'src/app/commons/interfaces/noticia';
import { StorageService } from 'src/app/commons/services/storage.service';
import { TitularService } from 'src/app/commons/services/titular.service';

@Component({
  selector: 'app-listado-titulares',
  templateUrl: './listado-titulares.component.html',
  styleUrls: ['./listado-titulares.component.scss']
})
export class ListadoTitularesComponent implements OnInit {

  error: boolean = false;
  titulares: Noticia[] = [];
  pais: string = 'mx';
  cargando: boolean = false;

  constructor(private titularService: TitularService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.getTitulares();
  }

  getTitulares() {
    this.cargando = true;
    // this.titulares = [];
    this.titularService.getElementos(`country=${this.pais}`)
    .then(response => {
      this.error = false;
      this.titulares = response.articles;
      this.cargando = false;
    })
    .catch(e => {
      this.error = true;
      this.cargando = false;
    });
  }

  guardarNoticia(titular: Noticia) {
    this.storageService.guardar('noticia-seleccionada', titular);
  }

}
