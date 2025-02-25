
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { GoogleAuthService } from 'src/app/core/services/google-auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule,  ButtonComponent],
  providers: [GoogleAuthService]
})
export class SignInComponent implements OnInit {

  public userProfile: any = { name: 'Guest', photo: '/src/assets/images/guest.jpg' };
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;


  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router, 
    private userService: UserService,
    private googleAuthService: GoogleAuthService
  ) {}

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    //this.userProfile=this.googleAuthService.getProfileData();
    console.log(this.userProfile.name);
    this.userService.setUser(this.userProfile);

  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
  onGoogleLogin(){
    this.googleAuthService.login();

  }

}
