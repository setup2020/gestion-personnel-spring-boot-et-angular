import {Injectable} from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UsersService} from '../admin/users/services/users.service';
import {Role} from '../model/role.model';

@Injectable({
  providedIn: 'root',
})
export class RoleResolver implements Resolve<Role[]> {
  constructor(private usersService: UsersService) {
  }

  resolve(): Observable<Role[]> {
    return this.usersService.getAllRoles();
  }
}
