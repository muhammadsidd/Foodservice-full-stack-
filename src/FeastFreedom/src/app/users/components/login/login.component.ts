import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersService } from 'src/app/DIservices/providers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // @Output() newLogin = new EventEmitter<string>();
  public username = '';
  public password = '';

  constructor(
    private router: Router,
    private providersService: ProvidersService
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.providersService.logIn(this.username, this.password);
    this.router.navigate(['/']);
  }

  // login(): void {
  //   this.providersService.login(this.username, this.password).subscribe(
  //     (token: any) => {
  //       localStorage.setItem('access', token.access);
  //       localStorage.setItem('refresh', token.refresh);
  //       this.newLogin.emit(token.access);
  //     },
  //     (error) => console.log(error),
  //     () => this.router.navigate(['/'])
  //   );
  // }
}
