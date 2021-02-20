import { InputEntradaService } from './../inputEntradaService/input-entrada.service';
import { HomeControlService } from './home-control.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputData } from '../model/InputData';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ejemploForm: FormGroup;
  validationMessages:Map<string, Map<string, string>>;

  arrayInputs:Array<InputData>;
  
  nombre: string;
  apellido: string;
  pseudonimo: string;
  edad:string;
  estiloMusical:string;
  arrayValores:Array<string>

  constructor(private homeControlService: HomeControlService, private inputEntradaService:InputEntradaService) {
    this.ejemploForm = this.homeControlService.ejemploForm;
    this.validationMessages = this.homeControlService.validationMessages;
    this.arrayInputs = this.inputEntradaService.arrayInputs;
    this.arrayValores = [this.nombre,this.apellido,this.pseudonimo,this.edad,this.estiloMusical];
  }

  getErrorMessage(control, error) {
    return this.homeControlService.getErrorMessage(control, error);
  }
}
