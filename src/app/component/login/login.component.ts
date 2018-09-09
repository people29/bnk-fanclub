import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({ login: '', password: '' });
  }

  login() {
    this.auth.authen(this.loginForm.value).subscribe(data => {
      this.auth.setToken(data.token);

      this.router.navigate(['/admin']);
    }, err => {
      alert(err.message);
    });
  }

}
