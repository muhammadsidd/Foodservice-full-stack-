import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-regular-user-detail',
  templateUrl: './regular-user-detail.component.html',
  styleUrls: ['./regular-user-detail.component.css'],
  providers: [UsersService]
})
export class RegularUserDetailComponent implements OnInit {
  id: any;
  regularUser: any;
  errorMsg: any;

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
    });

    this.usersService.getRegularUser(this.id).subscribe(
      (data) => this.regularUser = data,
      (error) => this.errorMsg = error,
    );
  }

  regularUserList() {
    this.router.navigate(['/users/'])
  }

  update(user: any) {
    this.router.navigate(['/users/', user.id, 'update'])
  }
}
