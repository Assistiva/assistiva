import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public loginForm: FormGroup;

  // constructor(private fb: FormBuilder, private router: Router) {
  //   this.loginForm = this.fb.group({
  //     email:this.fb.control(''),
  //     password: this.fb.control('')
  //   })
  //  }

  constructor(){}

  ngOnInit(): void {
  }

  public login() {

  }

}
