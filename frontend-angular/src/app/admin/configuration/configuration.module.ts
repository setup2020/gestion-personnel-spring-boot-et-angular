import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfigService } from './services/config.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppService } from 'src/app/services/app.service';
import { TypeOrganisationComponent } from './organisations/type-organisation/type-organisation.component';
import { OrganisationsComponent } from './organisations/organisations/organisations.component';
import { DetailOrganisationComponent } from './organisations/detail-organisation/detail-organisation.component';
import { MainConfigComponent } from './main-config/main-config.component';
import { FichePosteListComponent } from './fiche-poste/fiche-poste-list/fiche-poste-list.component';
import { FichePosteAddComponent } from './fiche-poste/fiche-poste-add/fiche-poste-add.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
  
    TypeOrganisationComponent,
    OrganisationsComponent,
    DetailOrganisationComponent,
    MainConfigComponent,
    FichePosteListComponent,
    FichePosteAddComponent,
  ],
  imports: [
    // CommonModule,
    ConfigurationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
   
  ],
  providers: [ConfigService, AppService],
})
export class ConfigurationModule {}
