import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Noticia } from '../interfaces/noticia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  cargado: boolean = true;
  fakeNews = [
    {
      title: 'Noticia 1'
    }
  ];

  constructor(private httpClient: HttpClient) { }

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

  getNoticias(): Promise<any> {
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2021-07-15&apiKey=59a12e101caf4769b2cf2cb82b677ef3';
    return this.httpClient.get(url).toPromise();
  }

  getNoticiasObservable(): Observable<any> {
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2021-07-15&apiKey=59a12e101caf4769b2cf2cb82b677ef3';
    return this.httpClient.get(url);
  }
}
