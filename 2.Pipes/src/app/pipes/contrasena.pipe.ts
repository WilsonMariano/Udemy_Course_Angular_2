import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean): string {
    let cadena: string = "";

    if(activar)
    {
      for(let i=0; i < value.length; i++)
      {
        cadena = cadena + '*';
      }
      return cadena;
    }
    else
    {
      return value;
    }

  }

}
