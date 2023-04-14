import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TypeOrganisationComponent } from './organisations/type-organisation/type-organisation.component';
import { OrganisationsComponent } from './organisations/organisations/organisations.component';
import { DetailOrganisationComponent } from './organisations/detail-organisation/detail-organisation.component';
import { MainConfigComponent } from './main-config/main-config.component';
import { FichePosteListComponent } from './fiche-poste/fiche-poste-list/fiche-poste-list.component';
import { FichePosteAddComponent } from './fiche-poste/fiche-poste-add/fiche-poste-add.component';

const routes: Routes = [
 
 {
  path:'',
  component:MainConfigComponent,
  children:[
    {
      path: 'type-organisations',
      component: TypeOrganisationComponent,
    },
    {
      path: 'organisations',
      component: OrganisationsComponent,
    },
    {
      path: 'organisations/:id',
      component: DetailOrganisationComponent,
    },
    {
      path: 'fiche-poste',
      component: FichePosteListComponent,
    },
    {
      path: 'fiche-poste-add',
      component: FichePosteAddComponent,
    },
  ]

 }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
