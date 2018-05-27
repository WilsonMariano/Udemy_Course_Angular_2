import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ARG",
      nombre: "Argentina"
    }
]

sexos: Array<string> = ["Hombre", "Mujer"];
  
  constructor() { }
  

  guardar(forma: NgForm)
  {
    // console.log(forma);
    console.log("ngForm:", forma);
    console.log("Valor", forma.value);
  }

}
