// @ts-ignore
import {Component} from '@angular/core';
// @ts-ignore
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

// @ts-ignore
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading: boolean = false;

  constructor(private authService: AuthService) {
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.createUser(form.value.email, form.value.password);
  }


}
