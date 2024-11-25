import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit {

  public miForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(firstNameAndLastnamePattern)]],
      email: ['', [Validators.required, Validators.pattern(emailPattern) ]],
      username: ['', [Validators.required, cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  isValidField(field: string) {
  }

  onSubmit(): void {
    this.miForm.markAllAsTouched();
  }
}

