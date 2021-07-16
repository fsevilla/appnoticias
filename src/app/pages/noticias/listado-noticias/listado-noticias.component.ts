import { Component, OnInit } from '@angular/core';

import { Noticia } from 'src/app/commons/interfaces/noticia';
import { NoticiaService } from 'src/app/commons/services/noticia.service';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.scss']
})
export class ListadoNoticiasComponent implements OnInit {

  // noticias: Noticia[] = [];
  noticias: Array<Noticia> = [];
  error: boolean = false;
  buscar: string = '';
  cargando: boolean = false;

  constructor(private noticiaService: NoticiaService) {
    console.log('Servicio Noticia: ', noticiaService);
  }

  ngOnInit() {
  }

  getNoticias() {
    // this.noticiaService.getNoticiasObservable(this.buscar).subscribe(response =>{ 
    //   this.noticias = response.articles;
    // })

    this.cargando = true;
    this.noticiaService.getElementos(this.buscar).then(response => {
      this.noticias = response.articles;
      this.error = false;
      this.cargando = false;
    }).catch(e => {
      // No se pudo cargar la informacion
      this.error = true;
      this.cargando = false;
    });
  }

}

// Pasos para inyectar un servicio
// 1. Importar clase del servicio
// 2. Inyectar en el constructor
// 3. Utilizar como propiedad en otro metodo 


// Componente    ------ Servicio --------- API
// pideNoticas  
//                  va al api
//                                      devuelve datos
//                      toma los datos y se los comparte al componente
// mostarListado



// noticias = dameLosDatos().then(response => {})