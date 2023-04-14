import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { IUser } from 'src/app/model/user.model';
import { AppService } from 'src/app/services/app.service';
import { LEVEL_ROLE, TYPE_AUTHORIZE } from 'src/app/util/enum';

@Directive({
  selector: '[appAuthorizationLevel]',
})
export class AuthorizationLevelDirective implements OnInit {
  user!: IUser;
  authorize!: { level: number; type: TYPE_AUTHORIZE };

  @Input()
  set appAuthorization(authorize: { level: number; type: TYPE_AUTHORIZE }) {
    if (!authorize) {
      throw new Error('Erreur');
    }
    this.authorize = authorize;
  }
  constructor(
    private appService: AppService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  ngOnInit(): void {
    console.log(this.authorize);
    if (this.authorize) {
      if (this.authorize.type === TYPE_AUTHORIZE.LEVEL_CHEF) {
        let hasAcees = false;
        if (this.authorize.level !== LEVEL_ROLE.EMPLOYEE) {
          hasAcees = true;
        } else {
          hasAcees = false;
        }

        if (hasAcees) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    }
  }
}
