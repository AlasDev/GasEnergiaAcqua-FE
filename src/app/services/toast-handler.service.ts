import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastHandlerService {
  constructor() {
  }

  showErrorMessage(message: string, duration: number = 5000): void {
    if (!message) return;
    // this.toaster.error(message, 'Error', {
    //   timeOut: duration
    // });
    alert(message)
  }

  showSuccessMessage(message: string, duration: number = 5000): void {
    if (!message) return;
    // this.toaster.success(message, 'Message', {
    //   timeOut: duration
    // });
    alert(message)
  }

  showInfoMessage(message: string, duration: number = 5000): void {
    if (!message) return;
    // this.toaster.info(message, 'Info', {
    //   timeOut: duration
    // });
    alert(message)
  }

}
