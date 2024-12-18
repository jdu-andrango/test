import { TestBed } from '@angular/core/testing';

import { NotasEtiquetasService } from './notas-etiquetas.service';

describe('NotasEtiquetasService', () => {
  let service: NotasEtiquetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasEtiquetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
