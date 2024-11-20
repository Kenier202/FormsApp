import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent implements OnInit {

  public myForm!: FormGroup;

  public newFavorite : FormControl = new FormControl('', Validators.required);
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([
        ['Metal Gear Solid', Validators.required],
        ['Resident Evil', Validators.required],
        ['The Last of Us', Validators.required],
      ]),
    });
  }

  get favoriteGames() {
    return this.myForm.controls['favoriteGames'] as FormArray;
  }


  isValidField(field: string) : boolean | null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }

  isValidFieldInArray(formArray: FormArray, i : number){
    return formArray.controls[i].errors
    && formArray.controls[i].touched;
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

  onAddToFavorite (): void{
    if (this.newFavorite.invalid)  return;
    const newGame = this.newFavorite.value;
    this.favoriteGames.push(this.fb.control(newGame, Validators.required));



  }
  onDeleteFavorite(i : number){
    this.favoriteGames.removeAt(i);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();  }

}
