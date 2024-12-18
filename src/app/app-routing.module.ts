import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNotasComponent } from './notas/lista/lista.component';

const routes: Routes = [
  { path: 'notas', component: ListaNotasComponent },
  { path: '**', redirectTo: 'notas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
