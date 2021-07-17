import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/commons/interfaces/noticia';

import { StorageService } from 'src/app/commons/services/storage.service';

@Component({
  selector: 'app-detalle-titular',
  templateUrl: './detalle-titular.component.html',
  styleUrls: ['./detalle-titular.component.scss']
})
export class DetalleTitularComponent implements OnInit {

  noticia: Noticia = { title: '' };

  constructor(
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('Params: ', params);
      this.cargarDatos();
    });
  }

  cargarDatos() {
    const noticia = this.storageService.obtener('noticia-seleccionada');
    this.noticia = noticia;
    if(!noticia.title) {
      this.router.navigate(['..'], {
        queryParams: {
          error: true
        },
        relativeTo: this.activatedRoute
      });
    }
  }

}