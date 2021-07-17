import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ruta } from 'src/app/commons/interfaces/ruta';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opciones: Ruta[] = [
    { label: 'Noticias', path: 'noticias' },
    { label: 'Titulares', path: 'titulares' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mandarARuta(ruta: string) {
    this.router.navigate([ruta]);
  }

}
