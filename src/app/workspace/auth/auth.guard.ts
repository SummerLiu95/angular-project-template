import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${ route.path }`;
    return this.checkLogin(url);
  }
}
