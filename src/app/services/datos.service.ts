import { Injectable } from '@angular/core';
import { Notas } from '../shared/models/notas.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  public notas: Notas;

}
