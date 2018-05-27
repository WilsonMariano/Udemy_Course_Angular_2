import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { VALID } from '@angular/forms/src/model';
import { Observable } from 'rxjs/Observable';
import { reject } from 'q';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  forma: FormGroup;

  usuario:any = {
    nombreCompleto: {
      nombre: "Mariano",
      apellido: "Wilson"
    },
    correo: "mgw009@gmail.com"
    // pasatiempos: ["Correr", "Dormir", "Comer"]
  }

  mascotas = ["Perro", "Gato", "Serpiente"];

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombreCompleto': new FormGroup({
        'nombre': new FormControl  ('', [Validators.required,Validators.minLength(5)]),
        'apellido': new FormControl('', [Validators.required, Validators.minLength(5), this.validarApellido])
      }),
      'correo': new FormControl('',   [
                                        Validators.required, 
                                        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                      ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'mascota': new FormControl('', Validators.required),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.validarPassword.bind(this.forma) //Arreglar problema de this self
    ]); 

    this.forma.controls['username'].valueChanges //Me subscribo a los cambios en el control
        .subscribe(data => console.log(data))

    this.forma.controls['username'].statusChanges //Me subscribo a los cambios en el estado del control
        .subscribe(data => console.log(data))

    // this.forma.setValue(this.usuario);
  }

  agregarPasatiempo()
  {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl("Dormir", Validators.required)
    );
  }

  validarApellido(control: FormControl)
  {
    if(control.value == "Wilson")
      return {
        nowilson: true
      }
    
      return null;
  }

  validarPassword(control: FormControl) : { [s:string]:boolean}
  {
    let forma = this;
    if(control.value !== forma['controls'].password1.value)
      return{
        noiguales: true
      }
    
    return null;
  }

  existeUsuario(control: FormControl): Promise<any>|Observable<any>
  {
    let promesa = new Promise(
      (resolve, reject) =>{
        setTimeout(()=>
        {
          if(control.value=== "strider")
            resolve ({existe:true});
        else
          resolve(null)

      },3000)
    });
    return promesa;
  }

  guardarCampos()
  {
    console.log(this.forma.value);
    console.log(this.forma);

    this.forma.reset();
  }

}
