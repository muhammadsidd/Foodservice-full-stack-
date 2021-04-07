import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersService } from './DIservices/providers.service';
import { AuthenticateService } from './users/services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FeastFreedom';
  public token: any;
  public user: any;
  public isCollapsed = true;

  public isLoggedIn = false;

  constructor(
    private router: Router,
    private providersService: ProvidersService
  ) {
    this.user = localStorage.getItem('access')
      ? this.providersService.getUser().subscribe(
          (user: any) => (this.user = user),
          (error) => console.log(error)
        )
      : null;
    this.providersService.isLoggedIn().subscribe((data) => {
      data
        ? this.providersService.getUser().subscribe(
            (user: any) => (this.user = user),
            (error) => console.log(error)
          )
        : (this.user = null);
    });
  }

  logout(): void {
    this.providersService.logOut();
    this.isCollapsed = true;
    this.user = null;
    this.router.navigate(['/']);
  }
}
