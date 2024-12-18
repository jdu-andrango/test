import { Component, OnInit} from '@angular/core';
import { NotasEtiquetasService } from '../../core/notas-etiquetas.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaNotasComponent implements OnInit {
  notas: any[] = [];

  constructor(private service: NotasEtiquetasService) {}

  ngOnInit() {
    this.cargarNotas();
  }

  cargarNotas() {
    this.service.obtenerNotas().subscribe((data) => (this.notas = data));
  }

  eliminarNota(id: number) {
    this.service.eliminarNota(id).subscribe(() => this.cargarNotas());
  }
}
