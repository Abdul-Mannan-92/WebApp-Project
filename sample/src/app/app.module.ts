// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';

import { CreatePostComponent } from './posts/create-post/create-post.component';
// @ts-ignore
import {MatToolbarModule} from "@angular/material/toolbar";
// @ts-ignore
import {MatButtonModule} from "@angular/material/button";
// @ts-ignore
import {MatCardModule} from "@angular/material/card";
// @ts-ignore
import {MatFormFieldModule} from "@angular/material/form-field";
// @ts-ignore
import {MatInputModule} from "@angular/material/input";
// @ts-ignore
import {FormsModule} from "@angular/forms";
// @ts-ignore
import {MatExpansionModule} from "@angular/material/expansion";
// @ts-ignore
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PostListComponent } from './posts/post-list/post-list.component';
// @ts-ignore
import {CommonModule} from "@angular/common";
// @ts-ignore
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
// @ts-ignore
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthInterceptor} from "./auth/auth-interceptor";
import { JokeComponent } from './joke/joke.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreatePostComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent,
    JokeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /*angular material imports*/
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule, CommonModule, MatProgressSpinnerModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
