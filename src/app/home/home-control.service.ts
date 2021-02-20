import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HomeControlService {
  public ejemploForm: FormGroup;
  private validacionNomApe: Validators = Validators.pattern('([A-Za-z]{3,}|[A-Za-z]{3,}\\s[A-Za-z]{3,})');
  validationMessages = new Map<string, Map<string, string>>();

  constructor() {
    this.validationMessages = new Map([["nombreEntrada",
                                          new Map([["pattern", "Nombre no valido"]])], 
                                       ["apellidoEntrada",
                                          new Map([["pattern", "Apellido no valido"]])],
                                       ["pseudonimoEntrada",
                                          new Map([["pattern", "Pseudonimo no valido"]])],
                                       ["edadEntrada",
                                          new Map([["pattern", "Edad no valido"]])],
                                       ["estiloMusicalEntrada",
                                          new Map([["pattern", "Estilo musical no valido"]])]   
      ]);

    this.ejemploForm = new FormGroup({
      nombreEntrada: new FormControl('', this.validacionNomApe),
      apellidoEntrada: new FormControl('', this.validacionNomApe),
      pseudonimoEntrada:new FormControl('', Validators.pattern('[A-Za-z\\\.ñ@0-9]{4,12}')),
      edadEntrada:new FormControl('', Validators.pattern('([1][89]|[2-9][0-9])')),
      estiloMusicalEntrada: new FormControl('', Validators.pattern('([Bb]achata|[Rr]ock|[Hh]ardcore)')),
    });
  }
  
  getErrorMessage(control, error:ValidationErrors) {
   return this.validationMessages.get(control).get(Object.keys(error)[0]);
  }
}
