import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from '../services/app.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private appService: AppService, private router: Router) {
  }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(
      '#######################################',
      this.appService.getValue()
    );

    if (this.appService.getValue()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
