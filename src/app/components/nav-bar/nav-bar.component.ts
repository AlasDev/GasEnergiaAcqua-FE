import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {routes} from '../../app.routes';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  standalone: false,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(protected authService: AuthService, protected userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    console.log("NavBar initialized");
    if (localStorage.getItem("token") != null) {
      this.authService._loginStatus.next(true)
    } else {
      this.authService._loginStatus.next(false)
      this.router.navigate(['login']);
    }
  }
}
