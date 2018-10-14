import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'benniao-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  passWord: string = "";
  userNameInput: boolean = true;
  passWordInput: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  login() {
    if(!this.userName) {
      this.userNameInput = true;
      return;
    }else if(!this.passWord) {
      this.passWordInput = true;
      return;
    }
    this.router.navigateByUrl('Home');
  }

}
