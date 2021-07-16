import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { Noticia } from '../interfaces/noticia';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService extends CrudService {

  protected endpoint: string = 'everything';
  cargado: boolean = true;

  fakeNews = [
    {
      title: 'Noticia 1'
    }
  ];

  // constructor(httpClient: HttpClient) {
  //   // codigo especifico
  //   super(httpClient);
  // }

  getFakeNoticias(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          articles: this.fakeNews
        });
        // reject({status: 401, msg: 'not authenticated'});
      }, 2000);
    });
  }

  getNoticiasObservable(buscar: string): Observable<any> {
    const url = `${this.url}everything?q=${buscar}&from=2021-07-15&apiKey=${this.apiKey}`;
    return this.httpClient.get(url);
  }

}
