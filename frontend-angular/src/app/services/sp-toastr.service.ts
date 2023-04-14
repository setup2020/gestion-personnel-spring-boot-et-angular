import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root',
})
export class SpToastrService {
  constructor(private toastr: ToastrManager) {}

  showSuccess(message: string, title = 'Success') {
    this.toastr.successToastr(message, title);
  }

  showError(message: string, title = 'Error') {
    this.toastr.errorToastr(message, title);
  }

  showWarning(message: string, title = 'Worning') {
    this.toastr.warningToastr(message, title);
  }

  showInfo(message: string, title = 'Info') {
    this.toastr.infoToastr(message, title);
  }

  showToast(position: any = 'top-left') {
    this.toastr.infoToastr('This is a toast.', 'Toast', {
      position: position,
    });
  }
}
