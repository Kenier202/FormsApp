import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { notEqual } from 'assert';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBeStrider = (control: FormControl) => {
    const value: string = control.value.trim().toLowerCase();
    if (value === 'strider') {
      return {
        cantBeStrider: true,
      };
    }

    return null;
  };

  public isFieldOneEqualFieldTwo(fieldOne: string, fieldTwo: string) {

    return (formGroup: FormGroup) : ValidationErrors | null => {
      const fieldOneValue = formGroup.get(fieldOne)?.value;
      const fieldTwoValue : string = formGroup.get(fieldTwo)?.value;

      if (fieldOneValue !== fieldTwoValue) {
        formGroup.get(fieldTwo)?.setErrors({notEqual: true});

        return {
          notEqual: true,
        };
      }
      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    }

  }
  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }
}
