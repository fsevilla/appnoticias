import { Injectable } from '@angular/core';

import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class TitularService extends CrudService {

  protected endpoint: string = 'top-headlines';

}
