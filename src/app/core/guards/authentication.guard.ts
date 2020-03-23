import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  canActivate(): boolean | Promise<boolean> {
    if (!this.session.get('authToken')) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
