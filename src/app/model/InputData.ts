export class InputData {
    constructor(public titulo:string,  public formControlName:string, public valor?:string) { }

    public setValor(valor:string): void{
        this.valor = valor;
    }
  }
  