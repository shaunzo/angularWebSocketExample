import { CanActivate, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private authService: AuthService, private router: Router ) {
    console.log('dasdasd');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
    .then((authenticated: boolean) => {
        if (authenticated) {
          console.log('User authenticated');
          return true;
        } else {
          console.log('User not authenticated');
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
