import { Component, OnInit } from '@angular/core';
import { NotasEtiquetasService } from '../../core/notas-etiquetas.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista.component.html',
})
export class ListaNotasComponent implements OnInit {
  notas: any[] = [];
  etiquetas: any[] = [];
  nuevaNota = {
    titulo: '',
    contenido: '',
    fechaCreacion: '',
    fechaActualizacion: '',
    etiqueta: { id: null }
  };
  notaSeleccionada: any = null;
  error: string | null = null;

  constructor(private service: NotasEtiquetasService) {}

  ngOnInit() {
    this.cargarNotas();
    this.cargarEtiquetas();
  }

  // Obtener todas las notas
  cargarNotas() {
    this.service.obtenerNotas().subscribe({
      next: (data) => {
        this.notas = data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error al cargar notas';
      }
    });
  }

  // Obtener todas las etiquetas
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

  // Crear una nueva nota
  crearNota() {
    if (!this.nuevaNota.titulo || !this.nuevaNota.contenido || !this.nuevaNota.fechaCreacion || !this.nuevaNota.etiqueta.id) {
      this.error = 'Por favor, completa todos los campos';
      return;
    }

    this.service.crearNota(this.nuevaNota).subscribe({
      next: () => {
        this.cargarNotas();
        this.nuevaNota = { titulo: '', contenido: '', fechaCreacion: '', fechaActualizacion: '', etiqueta: { id: null } };
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error al crear nota';
      }
    });
  }

  // Actualizar una nota existente
  actualizarNota() {
    if (!this.notaSeleccionada) {
      this.error = 'No hay nota seleccionada para actualizar';
      return;
    }

    // Verificar que la etiqueta también tiene un id
    if (!this.notaSeleccionada.etiqueta || !this.notaSeleccionada.etiqueta.id) {
      this.error = 'Por favor, selecciona una etiqueta para la nota';
      return;
    }

    this.service.actualizarNota(this.notaSeleccionada.id, this.notaSeleccionada).subscribe({
      next: () => {
        this.cargarNotas();
        this.notaSeleccionada = null;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error al actualizar nota';
      }
    });
  }

  // Eliminar una nota
  eliminarNota(id: number) {
    if (!id) {
      this.error = 'No se puede eliminar la nota, id no válido';
      return;
    }

    this.service.eliminarNota(id).subscribe({
      next: () => {
        this.cargarNotas();
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error al eliminar nota';
      }
    });
  }

  // Seleccionar una nota para editar
  seleccionarNota(nota: any) {
    this.notaSeleccionada = { ...nota };
  }

  // Cancelar edición de nota
  cancelarEdicion() {
    this.notaSeleccionada = null;
  }
}
