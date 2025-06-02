import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../../utils/user';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: false,
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  user?: User;

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    console.log("Profile initialized");
    this.userService.getLoggedUser().subscribe(User => {
      this.user = User;
    });
  }
}
