import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  NavigationEnd,
  NavigationError,
  Router,
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IMV PLATEFORM';
  constructor(
    private titleService: Title,
    private router: Router,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log('===========>', event);
        this.updateTitle();
      }
      if (event instanceof NavigationError && event.error.status === 404) {
        console.log(event.error);
        this.router.navigate(['/notfound']);
      }
    });
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
    let title: string =
      routeSnapshot.data && routeSnapshot.data['pageTitle']
        ? routeSnapshot.data['pageTitle']
        : '';
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  private updateTitle(): void {
    let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
    if (!pageTitle) {
      pageTitle = 'app';
    }
    this.translateService
      .get(pageTitle)
      .subscribe((title) => this.titleService.setTitle(title));
  }
}
