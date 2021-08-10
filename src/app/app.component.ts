import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  IngresoTazasForm: FormGroup;
  VentaTazasForm: FormGroup;
  constructor() {

    this.IngresoTazasForm = new FormGroup({
      calidad: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      dimensiones: new FormControl('', [Validators.required]),
      capacidad: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      material: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required, Validators.min(0)])
    });

    this.VentaTazasForm = new FormGroup({
      calidad: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required])
    });

  }


  ErrorIngresoTazas(controlName: string, errorName: string) {
    return this.IngresoTazasForm.controls[controlName].hasError(errorName);
  }

  ErrorVentaTazas(controlName: string, errorName: string) {
    return this.VentaTazasForm.controls[controlName].hasError(errorName);
  }


  ValidarCantidadDeTazas() {

    if (this.VentaTazasForm.value.calidad === 'alta') {

      return 'Por cada 10 tazas te regalamos 3 de baja calidad';

    } else
      if (this.VentaTazasForm.value.calidad === 'baja') {

        return 'Por cada 10 tazas te regalamos 2 de baja calidad';
      }

    return false;

  }




  AgregarInventario() {
    console.log("TAZA FORM VALUE", this.IngresoTazasForm.value);
  }


  VentaDeTaza() {

    if (this.VentaTazasForm.value.calidad === 'alta') {

      console.log("Rebajar " + this.VentaTazasForm.value.cantidad + " al inventario de alta");


      if (Math.floor(this.VentaTazasForm.value.cantidad / 10) >= 1) {

        console.log("Se regalan " + Math.floor(this.VentaTazasForm.value.cantidad / 10) * 3 + " tazas de baja");

      }

    } else
      if (this.VentaTazasForm.value.calidad === 'baja') {

        console.log("Rebajar " + this.VentaTazasForm.value.cantidad + " al inventario de baja");


        if (Math.floor(this.VentaTazasForm.value.cantidad / 10) >= 1) {

          console.log("Se regalan " + Math.floor(this.VentaTazasForm.value.cantidad / 10) * 2 + " tazas de baja");

        }

      }
  }

}
