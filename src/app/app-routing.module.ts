import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoEncontradaComponent } from './pages/no-encontrada/no-encontrada.component';
import { ListadoNoticiasComponent } from './pages/noticias/listado-noticias/listado-noticias.component';
import { DetalleTitularComponent } from './pages/titulares/detalle-titular/detalle-titular.component';
import { ListadoTitularesComponent } from './pages/titulares/listado-titulares/listado-titulares.component';

const routes: Routes = [
  { path: '', redirectTo: 'noticias', pathMatch: 'full' },
  { path: 'noticias', component: ListadoNoticiasComponent },
  { path: 'titulares', component: ListadoTitularesComponent },
  { path: 'titulares/:titulo', component: DetalleTitularComponent },
  { path: '**', component: NoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }