import { Component, OnInit } from '@angular/core';
import { NotasEtiquetasService } from './core/notas-etiquetas.service';
// import { NotasEtiquetasService } from './notas-etiquetas.service'; // Asegúrate de que este import sea correcto
// import { NotasEtiquetasService } from 'src/app/core/modules/notas-etiquetas.services/notas-etiquetas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
