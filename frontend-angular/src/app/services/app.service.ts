import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDepartment } from '../model/department.model';
import { Impact } from '../model/impact.model';
import { Priority } from '../model/priority.model';
import { IRole } from '../model/role.model';
import { ISupervisor } from '../model/supervisor.model';
import { IUser, User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  URL_APP = environment.URL_APP;
  URL_FRONT = environment.URL_FRONT;
  private getMe$ = new BehaviorSubject<any>(null);
  currentUser$ = this.getMe$.asObservable();
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.URL_APP}login`, {
      email: email,
      password: password,
    });
  }

  me(): Observable<any> {
    return this.httpClient.get<any>(`${this.URL_APP}me`);
  }

  logout() {
    return this.httpClient.get<any>(`${this.URL_APP}logout`);
  }

  getValue(): string | null {
    return localStorage.getItem('tokenImv');
  }

  setMe(user: User) {
    if (localStorage.getItem('rId')) {
      user.rId = (user.appends?.roles as ISupervisor[]).find(
        (r) => Number(r.id) === Number(localStorage.getItem('rId'))
      );

      user.rId?.isTop != Number(user.rId?.isTop);
      return this.getMe$.next(user);
    }
    return this.getMe$.next(user);
  }

  getAllImpacts(params = ''): Observable<Impact[]> {
    return this.httpClient.get<Impact[]>(`${this.URL_FRONT}impacts?${params}`);
  }

  getAllPriorities(params = ''): Observable<Priority[]> {
    return this.httpClient.get<Priority[]>(
      `${this.URL_FRONT}priorities?${params}`
    );
  }

  getAllDepartments(params = ''): Observable<IDepartment[]> {
    return this.httpClient.get<IDepartment[]>(
      `${this.URL_FRONT}front_departments?${params}`
    );
  }

  getAllSupervisorsTeam(teamId: number): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      `${this.URL_FRONT}team/${teamId}/supervisors`
    );
  }

  getAllEmployeeTeam(
    departmentId: number,
    teamId: number
  ): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      `${this.URL_FRONT}team/${departmentId}/${teamId}/employees`
    );
  }

  getAllManagersDepartment(departmentId: number): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      `${this.URL_FRONT}department/${departmentId}/managers`
    );
  }
}
