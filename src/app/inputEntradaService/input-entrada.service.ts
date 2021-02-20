import { InputData } from './../model/InputData';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputEntradaService {
  public nombre:InputData = new InputData("Nombre", "nombreEntrada");
  public apellido:InputData = new InputData("Apellido", "apellidoEntrada");
  public pseudonimo:InputData = new InputData("Pseudonimo", "pseudonimoEntrada");
  public edad:InputData = new InputData("Edad", "edadEntrada");
  public estiloMusical:InputData = new InputData("Estilo musical", "estiloMusicalEntrada");
  public arrayInputs:Array<InputData>;
  
  constructor() { 
    this.arrayInputs = [this.nombre, this.apellido, this.pseudonimo, this.edad, this.estiloMusical];
  }
}
