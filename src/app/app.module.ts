import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ListadoNoticiasComponent } from './pages/noticias/listado-noticias/listado-noticias.component';
import { ListadoTitularesComponent } from './pages/titulares/listado-titulares/listado-titulares.component';
import { NoEncontradaComponent } from './pages/no-encontrada/no-encontrada.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DetalleTitularComponent } from './pages/titulares/detalle-titular/detalle-titular.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NoticiasComponent,
    ListadoNoticiasComponent,
    ListadoTitularesComponent,
    NoEncontradaComponent,
    HeaderComponent,
    FooterComponent,
    DetalleTitularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
