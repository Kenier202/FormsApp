import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit {

  public miForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validatorService : ValidatorsService) {}

  ngOnInit(): void {
    this.miForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern) ]],
      username: ['', [Validators.required, this.validatorService.cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.miForm, field);
  }

  onSubmit(): void {
    this.miForm.markAllAsTouched();
  }
}

