import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-kitchen-user-list',
  templateUrl: './kitchen-user-list.component.html',
  styleUrls: ['./kitchen-user-list.component.css']
})
export class KitchenUserListComponent implements OnInit {
  public kitchenUsers: any;
  public errorMsg: any;

  constructor(private usersService: UsersService, private router: Router, private authService: ProvidersService) { }

  ngOnInit(): void {
    this.usersService.getKitchenUsers().subscribe(
      (data) => this.kitchenUsers = data,
      (error) => this.errorMsg = error,
      () => console.log("Complete!")
    );
  }

  kitchenUserCreate() {
    this.router.navigate(['users/kitchen/register'])
  }

  kitchenUserDetail(kitchenUser: any) {
    this.router.navigate(['/users/kitchens/', kitchenUser.id])
  }

  kitchenUserUpdate(kitchenUser: any){
    this.router.navigate(['/users/kitchens/', kitchenUser.id, 'update'])
  }

  kitchenUserDelete(kitchenUser: any){
    if (confirm(`Are you sure you want to delete ${kitchenUser.username}?`)) {
      this.usersService.deleteKitchenUser(kitchenUser.id).subscribe(() => {
        this.usersService.getKitchenUsers().subscribe(
          (data) => this.kitchenUsers = data,
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
