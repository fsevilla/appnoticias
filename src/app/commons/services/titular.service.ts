import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitularService {

  constructor(private httpClient: HttpClient) { }

  getElementos(pais: string): Promise<any> {
    const url = `${environment.apiUrl}top-headlines?country=${pais}&apiKey=${environment.apiKey}`;
    return this.httpClient.get(url).toPromise();
  }
}
