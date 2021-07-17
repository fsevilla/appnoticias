import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  guardar(nombre: string, datos: Object): void {
    sessionStorage.setItem(nombre, JSON.stringify(datos));
  }

  obtener(nombre: string): any {
    const datos = sessionStorage.getItem(nombre) || '{}';
    return JSON.parse(datos);
  }
}
