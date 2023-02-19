import { Component,OnInit } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : Login ={
    "id": 2445,
    "name": "surya",
    "email": "surya@gmail.com",
    "mobile": 6382421795
  }

  constructor(){

  }
  ngOnInit() {

  }


}
