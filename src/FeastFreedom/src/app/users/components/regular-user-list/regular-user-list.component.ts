import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-regular-user-list',
  templateUrl: './regular-user-list.component.html',
  styleUrls: ['./regular-user-list.component.css']
})
export class RegularUserListComponent implements OnInit {
  public regularUsers: any;
  public errorMsg: any;

  constructor(private usersService: UsersService, private authService: ProvidersService, private router: Router) { }

  ngOnInit(): void {
    this.usersService.getRegularUsers().subscribe(
      (data) => this.regularUsers = data,
      (error) => this.errorMsg = error,
      () => console.log("Complete!")
    );
  }

  regularUserCreate() {
    this.router.navigate(['users/register'])
  }

  regularUserDetail(regularUser: any) {
    this.router.navigate(['/users/', regularUser.id])
  }

  regularUserUpdate(regularUser: any){
    this.router.navigate(['/users/', regularUser.id, 'update'])
  }

  regularUserDelete(regularUser: any){
    if (confirm(`Are you sure you want to delete ${regularUser.username}?`)) {
      this.usersService.deleteRegularUser(regularUser.id).subscribe(() => {
        this.usersService.getRegularUsers().subscribe(
          (data) => this.regularUsers = data,
          (error) => this.errorMsg = error
        )
      })
    }
  }

  isLoggedIn(){
    return this.authService.isAuthenticated();
  }
  
  getLoggedInUserId(){
    return this.authService.getUserId();
  }
}
