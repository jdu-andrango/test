import { Component, OnInit } from '@angular/core';
import { NotasEtiquetasService } from '../core/notas-etiquetas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
etiquetas: any[] = []; // Declaración de la propiedad etiquetas
  error: string = '';    // Declaración de la propiedad error

  constructor(private notasEtiquetasService: NotasEtiquetasService) {}

  ngOnInit() {
    this.obtenerEtiquetas(); // Llama al método obtenerEtiquetas al inicializar el componente
  }

  obtenerEtiquetas() {
    this.notasEtiquetasService.obtenerEtiquetas().subscribe({
      next: (data) => {
        console.log('Etiquetas obtenidas:', data);
        this.etiquetas = data; // Almacena los datos obtenidos en la propiedad etiquetas
      },
      error: (err) => {
        console.error('Error al obtener las etiquetas:', err);
        this.error = 'No se pudieron cargar las etiquetas. Verifica la conexión al servidor.';
      }
    });
  }
}
