import { Component,Output,EventEmitter } from '@angular/core';
import { NotasEtiquetasService } from '../../core/notas-etiquetas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioNotasComponent {
  @Output() notaCreada = new EventEmitter<void>();
  titulo: string = '';
  descripcion: string = '';

  constructor(private service: NotasEtiquetasService) {}

  guardarNota() {
    const nota = { titulo: this.titulo, descripcion: this.descripcion };
    this.service.crearNota(nota).subscribe(() => this.notaCreada.emit());
  }
}
