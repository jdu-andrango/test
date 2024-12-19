import { Component, OnInit } from '@angular/core';
import { NotasEtiquetasService } from '../core/notas-etiquetas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
etiquetas: any[] = []; // Declaración de la propiedad etiquetas
  error: string = '';    // Declaración de la propiedad error

  constructor(private notasEtiquetasService: NotasEtiquetasService) {}

 
}
