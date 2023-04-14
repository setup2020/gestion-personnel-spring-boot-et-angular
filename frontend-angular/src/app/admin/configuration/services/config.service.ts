import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from 'src/app/model/level.model';
import { environment } from 'src/environments/environment';
import { ILineUserPosteDTO, IOrganisation, IPoste, ITask, ITypeOrganisation } from '../organisations/models/typeOrganisation';
import { IFichePoste } from 'src/app/model/fiche-poste.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  URL_ADMIN = environment.URL_ADMIN;
  URL_ADMIN1 = environment.URL_ADMIN1;
  response$:Observable<any>[]=[];

  constructor(private httpClient: HttpClient) {}


    /**
   * GESTION DES ORGANISATION
   */

    getAllTypeOrganisation(): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}types_organisations`);
    }


    createTypeOrg(type: ITypeOrganisation): Observable<Level> {
      return this.httpClient.post<Level>(`${this.URL_ADMIN1}type_organisations`, type);
    }
   

    getAllOrganisation(): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}organisation`);
    }

    createOrg(org: IOrganisation): Observable<Level> {
      return this.httpClient.post<Level>(`${this.URL_ADMIN1}organisations`, org);
    }

    createUserOrg(userPoste: ILineUserPosteDTO): Observable<Level> {
      return this.httpClient.post<Level>(`${this.URL_ADMIN1}user_poste`, userPoste);
    }

    getOrg(orgId:number): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}organisations/${orgId}`);
    }

    createPoste(poste: IPoste): Observable<any> {
      return this.httpClient.post<any>(`${this.URL_ADMIN1}postes`, poste);
    }

    getOrgPoste(orgId:number): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}organisations/${orgId}/postes`);
    }
    getUsers(): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}admin/users`);
    }

   
    getAllUserOrganisation(ids:string): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}organisations/${ids}/users`);
    }

    getAllSousOrganisation(id:number): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}organisation/${id}/sous_organisations`);
    }

    getAllPosteUser(id:number): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}admin/users/${id}/postes`);
    }

    createTask(task: ITask): Observable<any> {
      return this.httpClient.post<any>(`${this.URL_ADMIN1}tasks`, task);
    }

    getAllTasksOrganisationChef(id:number): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}organisation_chef/${id}/tasks`);
    }

    getAllTasksOfValidationOrganisationChef(id:number): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}organisation_chef/${id}/tasks_validation`);
    }

    getAllTasksAttributeAMaSousOrganisation(id:number): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}organisation_chef/${id}/tasks_sous_organisations`);
    }

    createFichePoste(fichePoste: IFichePoste): Observable<any> {
      return this.httpClient.post<any>(`${this.URL_ADMIN1}fiche_poste`, fichePoste);
    }

    getAllFichePoste(): Observable<any> {
      return this.httpClient.get<any>(`${this.URL_ADMIN1}fiche_poste`);
    }

    deleteFichePoste(id:number): Observable<void> {
      return this.httpClient.delete<void>(`${this.URL_ADMIN1}fiche_poste/${id}`);
    }
}
