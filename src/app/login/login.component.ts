import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../base/base.component';
import {CommonRegex} from '../base/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  
  loginForm: FormGroup;
  
  constructor(private _fb: FormBuilder) {
    super();
  }
  
  ngOnInit() {
    this.createLoginForm();
    console.log('ng on init called');
  }
  
  createLoginForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50), Validators.pattern(CommonRegex.ALPHA_NUMERIC_REGEXP)]]
    });
  }
  
  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log('Form Value :=>', form.value);
    }
  }
}
