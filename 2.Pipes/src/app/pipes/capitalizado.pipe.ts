import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class capitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true):string {

    // console.log(value); //Valor que recibo el html
    // console.log(args); //Argumentos que pueden mandar en el pipe del html => cadena | capitalizacion:1:2:3

    value = value.toLowerCase(); //Convierto todos los caracteres a minúesculas
    let nombres = value.split(" "); //Corto las palabras en los espacios

    if(todas) //si la condicion es true capitalizo todas las palabras
    {

      for(let i in nombres) //recorro el arreglo de palabras
      {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1); //cada palabra va a ser igual a su primer letra en mayúscula mas el resto
      }                                                                  //de la palabra
    }
    else //si la condicion es false copitalizo solo la primer palabra
    {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1); //idem al anterior pero solo con la primer palabra dela rreglo
    }

      return nombres.join(" "); //retorno la cadena de palabras unidas mediante un espacio

  }
}
