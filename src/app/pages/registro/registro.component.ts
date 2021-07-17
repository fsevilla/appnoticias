import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      edad: [18, [Validators.required, Validators.min(18)]],
      genero: ['F', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      terminos: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
  }

  enviarDatos() {
    console.log(this.form);
    const datos = this.form.getRawValue();
    console.log('Voy a enviar los siguientes datos: ', datos);
  }

}
