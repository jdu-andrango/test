import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasEtiquetasService {
  private baseUrl = 'http://161.97.140.245:2828'; // URL del backend
  // private baseUrl = '/api/etiquetas/'; // En lugar de 'http://161.97.140.245:2828'


  constructor(private http: HttpClient) {}

  // CRUD para Etiquetas
  crearEtiqueta(etiqueta: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/etiquetas/`, etiqueta);
  }

  obtenerEtiquetas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/etiquetas/`);
  }

  actualizarEtiqueta(id: number, etiqueta: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/etiquetas/${id}`, etiqueta);
  }

  eliminarEtiqueta(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/etiquetas/${id}`);
  }

  // CRUD para Notas
  crearNota(nota: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/notas/`, nota);
  }

  obtenerNotas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/notas`);
  }

  actualizarNota(id: number, nota: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/notas${id}`, nota);
  }

  eliminarNota(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/notas${id}`);
  }
}
