import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private nombre = "Mariano";
  private arreglo = [1,2,3,4,5,6,7,8,9,10];
  private PI = Math.PI;
  private a = 0.234;
  private salario = 1234.5;


  private heroe={
    nombre : "Logan",
    clave : "Wolverine",
    edad : 500,
    direccion : {
      calle: "primera",
      casa: 19
    }
  }

  private valorPromesa = new Promise( (resolve, reject)=>{
    setTimeout( ()=> resolve("Llego la data!"),3500);
  });

  private fecha = new Date();
  private nombre2 = "MaRiAnO GaBrIeL wIlSoN";
  private video = 'Y7aEiVwBAdk';
  private activar: boolean = true;

}
