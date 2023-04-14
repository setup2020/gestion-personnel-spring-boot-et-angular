import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  FullNamePipe,
  OccupancyPipe,
  OccupationPipe,
  ParentPipe,
  ProgressBarPipe,
  SafeUrlPipe,
  SizeFilePipe,
  TargetValuePipe,
  TruncatePipe,
} from '../pipes/truncate.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StatusComponent } from './status/status.component';
import { AuthorizationDirective } from './directives/authorization.directive';
import { SpToastrService } from '../services/sp-toastr.service';
import { AuthorizationLevelDirective } from './directives/authorization-level.directive';
import { SharedLibsModule } from './shared-libs.module';


@NgModule({
  declarations: [
    TruncatePipe,
    SizeFilePipe,
    FullNamePipe,
    TargetValuePipe,
    OccupancyPipe,
    OccupationPipe,
    ProgressBarPipe,
    ParentPipe,
    SafeUrlPipe,
    StatusComponent,
    AuthorizationDirective,

    AuthorizationLevelDirective,
   
  ],
  imports: [SharedLibsModule],

  exports: [
    SharedLibsModule,
    TruncatePipe,
    SizeFilePipe,
    SafeUrlPipe,
    DragDropModule,
    StatusComponent,
    AuthorizationDirective,
   
    AuthorizationLevelDirective,
    
    FullNamePipe,
    TargetValuePipe,
    ParentPipe,
    OccupancyPipe,
    OccupationPipe,
    ProgressBarPipe,
   
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [SpToastrService],
    };
  }
}
