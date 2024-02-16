import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin : FormGroup;
  constructor(private fb : FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username : this.fb.control("oubalipre1"),
      password : this.fb.control("password")
    })
  }

  handleLogin() {
    let username = this.formLogin.value.username;
    let pwd = this.formLogin.value.password;
    this.authService.login(username, pwd).subscribe({
      next : data => {
        this.authService.loadProfile(data);
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
