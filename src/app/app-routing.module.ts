import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNotasComponent } from './notas/lista/lista.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Ruta predeterminada redirige a 'home'
  { path: 'home', component: HomeComponent },          // Componente principal al inicio
  { path: 'notas', component: ListaNotasComponent },
  { path: 'casa', component: MainComponent },
  { path: '**', redirectTo: 'home' },                  // Ruta comodín redirige a 'home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
