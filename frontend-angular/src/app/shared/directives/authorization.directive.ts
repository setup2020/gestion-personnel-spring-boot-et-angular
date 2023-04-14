import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { IDepartment } from 'src/app/model/department.model';
import { IUser } from 'src/app/model/user.model';
import { AppService } from 'src/app/services/app.service';

@Directive({
  selector: '[appAuthorization]',
})
export class AuthorizationDirective implements OnInit {
  user!: IUser;
  authorize!: { level: number; department: number }[];
  @Input()
  set appAuthorization(authorize: { level: number; department: number }[]) {
    if (!authorize || !authorize.length) {
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
    let hasAcees = false;
    this.appService.currentUser$.subscribe((data) => {
      if (data) {
        this.user = data;
        let isTop = Number(this.user.appends?.top);

        if (!isTop) {
          hasAcees = true;
        } else {
          for (let index = 0; index < this.authorize.length; index++) {
            const element = this.authorize[index];
            if (
              (this.user.appends?.departments as IDepartment[]).find(
                (s) =>
                  Number(s.id) === Number(element.department) &&
                  Number(this.user.rId?.levelId) === Number(element.level)
              )
            ) {
              hasAcees = true;
              break;
            }
          }
        }

        if (hasAcees) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    });
  }
}
