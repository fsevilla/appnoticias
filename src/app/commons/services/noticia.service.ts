import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Noticia } from '../interfaces/noticia';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  getElementos(buscar: string): Promise<any> {
    const url = `${environment.apiUrl}everything?q=${buscar}&from=2021-07-15&apiKey=${environment.apiKey}`;
    return this.httpClient.get(url).toPromise();
  }

  getNoticiasObservable(buscar: string): Observable<any> {
    const url = `${environment.apiUrl}everything?q=${buscar}&from=2021-07-15&apiKey=${environment.apiKey}`;
    return this.httpClient.get(url);
  }
}
