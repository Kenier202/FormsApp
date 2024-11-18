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

  isValidField( field: string): boolean | null{
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
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
