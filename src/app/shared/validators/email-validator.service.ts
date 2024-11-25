import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { observable, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailVlaidatorService implements AsyncValidator {

  validate(control: AbstractControl):Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>( ( subscriber ) => {
      console.log({email});

      if (email === 'strider@gmail.com') {
        subscriber.next({emailTaken: true});
        subscriber.complete();
        return;
      }

      subscriber.next(null);
      subscriber.complete();

    });

    return httpCallObservable;
  }

  // validate(control: AbstractControl):Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log(email);
  //   return of({emailTaken: true});
  // }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
