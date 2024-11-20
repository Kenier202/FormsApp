import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit{

  public myform!: FormGroup;

  constructor (private fb: FormBuilder){}

  ngOnInit(): void {
    this.myform = this.fb.group({
      gender : ['M',Validators.required],
      wantNotifications : [true,Validators.required],
      termsAndConditions : [false,Validators.requiredTrue],

    });
  }

  isValidField(field : string) : boolean | null {
    return this.myform.controls[field].errors && this.myform.controls[field].touched;
  }



  onsave(): void {
    if (this.myform.invalid) {
      this.myform.markAllAsTouched();
      return;
    }
  }
}
