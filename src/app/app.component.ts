import { Component } from '@angular/core';

interface Movie {
  title: string;
  description?: string;
  year?: number;
  duration?: number;
  idioma?: string;
  play?: Function;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = '';

  buscar: string = '';

  filteredMovies: Array<Movie> = [];

  // movies: Movie[]|Series[]|Documental[] = [
  movies: Array<Movie> = [
    { title: 'Avengers',  description: 'pelicula de los vengadores' },
    { title: 'Harry Potter' },
    { title: 'Interestelar' },
    { title: 'A prueba de fuego' }
  ];

  constructor() {
    setTimeout(() => {
      this.nombre = 'Francisco';
    }, 100);

    this.filteredMovies = this.movies.slice();
  }

  filtrar(e:any) {
    console.log('Voy a filtrar los titulos', e);
    this.filteredMovies = this.movies.filter(item => {
      return item.title.toLowerCase().includes(this.buscar.toLowerCase());
    });
  }

  setBuscar(e:any) {
    if(e.key === 'Enter') {
      this.filtrar({});
      return;
    }
  }

  detenerSubmit(e:any) {
    // e.stopPropagation();
    if(e.key === 'Enter') {
      // e.preventDefault();
    }
  }
}


// Pelicula
// nombre/titulo
// idioma
// duracion
// descripcion
// genero
// ...