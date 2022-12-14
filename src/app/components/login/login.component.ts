import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoginRequest} from "../../interfaces/interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,private authService:
    AuthService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  ngOnInit(): void {
  }

  login() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        control.markAsTouched()
      })
    }
    const loginRequest: LoginRequest = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value
    }
    this.authService.login(loginRequest).subscribe(data =>{
      console.log(data)
    })
  }

  get passwordValid() {
    return this.form.get('password')?.invalid && this.form.get('password')?.touched
  }

  get usernameValid() {
    return this.form.get('username')?.invalid && this.form.get('username')?.touched
  }
}
