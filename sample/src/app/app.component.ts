// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {
  }


  title = 'sample';

  ngOnInit(): void {
    this.authService.autoAuthUser();
  }
}
