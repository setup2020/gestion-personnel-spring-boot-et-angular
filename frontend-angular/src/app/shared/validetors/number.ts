import { AbstractControl, ValidatorFn } from '@angular/forms';

export const max = (max: number): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let val: number = control.value;

    if (control.pristine || control.pristine) {
      return null;
    }
    if (val <= max) {
      return null;
    }
    return { max: true };
  };
};

export const min = (min: number): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let val: number = control.value;

    if (control.pristine || control.pristine) {
      return null;
    }
    if (val >= min) {
      return null;
    }
    return { min: true };
  };
};
