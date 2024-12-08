import {AuthService} from "./auth.service";
// @ts-ignore
import {inject} from "@angular/core";
// @ts-ignore
import {Router} from "@angular/router";


export const authGuard = ()=> {
  const authService = inject(AuthService); // inject AuthService
  const router = inject(Router); // inject router for navigation

  const isAuthenticated = authService.getIsAuth();

  if(!isAuthenticated){
    router.navigate(['/']);
  }

  return isAuthenticated;
}
