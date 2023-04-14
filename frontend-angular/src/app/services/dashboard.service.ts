import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  URL_FRONT = environment.URL_FRONT;
  constructor(private httpClient: HttpClient) {}
  getDashbord(id?: number): Observable<any> {
    if (id) {
      return this.httpClient.get(`${this.URL_FRONT}dashboards?depart=${id}`);
    } else {
      return this.httpClient.get(`${this.URL_FRONT}dashboards`);
    }
  }
}
