import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-kitchen-user-detail',
  templateUrl: './kitchen-user-detail.component.html',
  styleUrls: ['./kitchen-user-detail.component.css'],
  providers: [UsersService]
})
export class KitchenUserDetailComponent implements OnInit {
  id: any;
  kitchenUser: any;
  errorMsg: any;

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
    });

    this.usersService.getKitchenUser(this.id).subscribe(
      (data) => this.kitchenUser = data,
      (error) => this.errorMsg = error,
    );
  }

  kitchenUserList() {
    this.router.navigate(['/users/kitchens'])
  }

  update(user: any) {
    this.router.navigate(['/users/kitchens/', user.id, 'update'])
  }
}
