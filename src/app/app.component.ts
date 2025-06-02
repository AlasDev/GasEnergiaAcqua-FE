import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {ToastHandlerService} from './services/toast-handler.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(protected authService: AuthService, protected toastHandler: ToastHandlerService) { }

  ngOnInit(): void {
    console.log("App initialized");
    if (this.authService.isTokenValid()) {
      this.toastHandler.showSuccessMessage("Token is still valid.");
    } else {
      this.toastHandler.showSuccessMessage("Token is invalid or expired, performing logout.");
      this.authService.logout();
    }
  }
  title = 'GasEnergiaAcqua';
}
