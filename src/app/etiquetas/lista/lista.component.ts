import { Component, OnInit } from '@angular/core';
import { NotasEtiquetasService } from '../../core/notas-etiquetas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{
  etiquetas: any[] = [];
  nuevaEtiqueta = { nombre: '', descripcion: '', color: '' };
  etiquetaSeleccionada: any = null;
  error: string | null = null;

  constructor(private service: NotasEtiquetasService) {}

  ngOnInit() {
    this.cargarEtiquetas();
  }

  // Obtener etiquetas
  cargarEtiquetas() {
    this.service.obtenerEtiquetas().subscribe({
      next: (data) => {
        this.etiquetas = data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error al cargar etiquetas';
      }
    });
  }

  // Crear etiqueta
  crearEtiqueta() {
    if (!this.nuevaEtiqueta.nombre || !this.nuevaEtiqueta.descripcion || !this.nuevaEtiqueta.color) {
      this.error = 'Por favor, completa todos los campos';
      return;
    }

    this.service.crearEtiqueta(this.nuevaEtiqueta).subscribe({
      next: () => {
        this.cargarEtiquetas();
        this.nuevaEtiqueta = { nombre: '', descripcion: '', color: '' };
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error al crear etiqueta';
      }
    });
  }

  // Actualizar etiqueta
  actualizarEtiqueta() {
    if (!this.etiquetaSeleccionada) {
      this.error = 'No hay etiqueta seleccionada para actualizar';
      return;
    }

    this.service.actualizarEtiqueta(this.etiquetaSeleccionada.id, this.etiquetaSeleccionada).subscribe({
      next: () => {
        this.cargarEtiquetas();
        this.etiquetaSeleccionada = null;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error al actualizar etiqueta';
      }
    });
  }

  // Eliminar etiqueta
  eliminarEtiqueta(id: number) {
    this.service.eliminarEtiqueta(id).subscribe({
      next: () => {
        this.cargarEtiquetas();
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error al eliminar etiqueta';
      }
    });
  }

  // Seleccionar etiqueta para editar
  seleccionarEtiqueta(etiqueta: any) {
    this.etiquetaSeleccionada = { ...etiqueta };
  }

  // Cancelar edición
  cancelarEdicion() {
    this.etiquetaSeleccionada = null;
  }
}
