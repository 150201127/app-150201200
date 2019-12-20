import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.serviceLogin(this.email, this.password);
  }

}
