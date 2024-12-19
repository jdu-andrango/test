import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EtiquetasModule { }
