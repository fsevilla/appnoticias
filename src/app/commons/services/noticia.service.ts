import { Injectable } from '@angular/core';

import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService extends CrudService {

  protected endpoint: string = 'everything';

  // constructor(httpClient: HttpClient) {
  //   // codigo especifico
  //   super(httpClient);
  // }

}
