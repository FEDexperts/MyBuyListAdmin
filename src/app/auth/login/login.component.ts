import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { Login } from '../auth.actions';
import { AuthService } from '../../shared/services/auth.service';
import { tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store<AppState>, private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: this.fb.control('test@gmail.com', Validators.required),
      password: this.fb.control('test', Validators.required)
    })
  }

  login(email: string, password: string) {
    this.auth.login({ email: email, pass: password })
      .subscribe(
        user => this.store.dispatch(new Login(user))
      );
  }

}
