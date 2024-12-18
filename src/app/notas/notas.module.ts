import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaNotasComponent } from './lista/lista.component';
import { FormularioNotasComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from '../etiquetas/formulario/formulario.component';



@NgModule({
  declarations: [
    ListaNotasComponent,
    FormularioNotasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class NotasModule { }
