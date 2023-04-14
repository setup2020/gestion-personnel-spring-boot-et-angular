import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'config',
    loadChildren: () =>
      import('./admin/configuration/configuration.module').then(
        (m) => m.ConfigurationModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./admin/users/users-routing.module').then(
        (m) => m.UsersRoutingModule
      ),
  },
  {
    path: 'notfound',
    component: PageNotFoundComponent,
  },
  
 
  
 

  {
    path: '**',
    redirectTo: '/config',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
