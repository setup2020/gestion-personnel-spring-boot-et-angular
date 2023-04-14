import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';


import { NgxLoadingModule } from 'ngx-loading';
// touqs ce qui est librairie externe
@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,

    NgbPaginationModule,
   

    NgxLoadingModule,
    // NgSelectModule,
    TranslateModule,
  ],

})
export class SharedLibsModule {}
