import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [
          BrowserAnimationsModule,
          MatFormFieldModule,
          MatInputModule,
          FormsModule,
          ReactiveFormsModule
        ],
      })
      .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  
  it('Login component should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('validations check for login component', () => {
    const valid_email = 'hasmukh.baldaniya@sdfsasdfghfdasdfgds.com';
    const invalid_lenth_email = 'hasmukh.baldaniya@sdfsasdfghfdasdfgds.comhasmukh.baldaniya@sdfsasdfghfdasdfgds.com';
    const invalid_email = 'hasmukh';
  
    const valid_password = 'hasmukh123';
    const invalid_lenth_password = '12345644322334567865432345678654331234564432233456786543234567865433123456443223';
    const invalid_password = '@123';
    
    component.ngOnInit();
    expect(component.loginForm.valid).toBeFalsy();
    
    let errors;
    const email_ctrl = component.loginForm.get('email');
    errors = email_ctrl.errors || {};
    expect(errors['required']).toBeTruthy();
    
    email_ctrl.setValue(invalid_email);
    errors = email_ctrl.errors || {};
    expect(errors['pattern']).toBeTruthy();
  
    email_ctrl.setValue(invalid_email);
    errors = email_ctrl.errors || {};
    expect(errors['minlength']).toBeTruthy();
  
    email_ctrl.setValue(invalid_lenth_email);
    errors = email_ctrl.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  
    const pwd_ctrl = component.loginForm.get('password');
    errors = pwd_ctrl.errors || {};
    expect(errors['required']).toBeTruthy();
  
    pwd_ctrl.setValue(invalid_password);
    errors = pwd_ctrl.errors || {};
    expect(errors['pattern']).toBeTruthy();
  
    pwd_ctrl.setValue(invalid_password);
    errors = pwd_ctrl.errors || {};
    expect(errors['minlength']).toBeTruthy();
  
    pwd_ctrl.setValue(invalid_lenth_password);
    errors = pwd_ctrl.errors || {};
    expect(errors['maxlength']).toBeTruthy();
    
    email_ctrl.setValue(valid_email);
    pwd_ctrl.setValue(valid_password);
  
    expect(component.loginForm.valid).toBeTruthy();
  });
});
