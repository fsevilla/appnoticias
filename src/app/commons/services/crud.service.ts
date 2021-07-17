import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected url: string = '';
  protected apiKey: string = '';
  protected endpoint: string = '';

  constructor(protected httpClient: HttpClient) {
    this.url = environment.apiUrl;
    this.apiKey = environment.apiKey;
  }

  getElementos(query: string): Promise<any> {
    // q=${buscar}&from=2021-07-15
    // country=${pais}
    const url = `${environment.apiUrl}${this.endpoint}?apiKey=${environment.apiKey}&${query}`;
    return this.httpClient.get(url).toPromise();
  }

  getElementoPorId() {}

  crearElement() {}

  editarElemento() {}

  eliminarElemento() {}
}
