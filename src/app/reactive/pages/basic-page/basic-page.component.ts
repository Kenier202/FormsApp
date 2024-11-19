import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const rtx = {
  name: 'rtx',
  price: 100,
  inStorage: 10
}
@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  ngOnInit(): void {
    this.myForm.reset(
      {price: rtx.price, name: rtx.name, inStorage: rtx.inStorage});
  }

  isValidField(field: string) : boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field : string) : string | null{

    if (!this.myForm.controls[field].errors) return null;

    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case "required":
          return "El campo es requerido";
        case "minlength":
          return "El campo debe de tener 3 letras";
        case "min":
          return "El campo debe de ser mayor o igual a 0";
      }
    }
    return null;
  }

  public myForm: FormGroup = new FormGroup(
  {
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    inStorage: new FormControl(0, [Validators.required, Validators.min(0)]),
  },);


  onSave() :void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset({price: 0, name: '', inStorage: 0});

  }
}
