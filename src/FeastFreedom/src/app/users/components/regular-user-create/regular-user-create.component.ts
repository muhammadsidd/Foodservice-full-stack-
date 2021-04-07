import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-regular-user-create',
  templateUrl: './regular-user-create.component.html',
  styleUrls: ['./regular-user-create.component.css'],
  providers: [UsersService],
})
export class RegularUserCreateComponent implements OnInit {
  public regularUserForm: any;
  public regularUsers: any;
  public errorMsg: any;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private providersService: ProvidersService
  ) {}

  ngOnInit(): void {
    this.regularUserForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150),
          Validators.pattern('^[A-Za-z0-9]+$'),
        ],
      ],
      first_name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern("^[A-Za-z -']+$"),
        ],
      ],
      last_name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern("^[A-Za-z -']+$"),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(150),
          Validators.pattern('^.{8,150}$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
          Validators.pattern(
            '[A-Za-z0-9\\._-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,}'
          ),
        ],
      ],
      is_active: [true, [Validators.required]],
      is_staff: [false, [Validators.required]],
      is_superuser: [false, [Validators.required]],
      date_joined: [new Date(), [Validators.required]],
      last_login: [null, []],
      phone_number: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
          Validators.pattern('^\\d{3}-\\d{3}-\\d{4}$'),
        ],
      ],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          Validators.pattern('^\\d{1,5} [a-zA-Z0-9\\. ]+$'),
        ],
      ],
      city: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
          Validators.pattern("^[a-zA-Z\\. -']+$"),
        ],
      ],
      state: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
          Validators.pattern('^[A-Z]{2}$'),
        ],
      ],
      zip_code: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern('^\\d{5}(-\\d{4})?$'),
        ],
      ],
      question_one: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(80),
          Validators.pattern("^[A-Za-z0-9 ,'//]{20,80}\\?$"),
        ],
      ],
      answer_one: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern("^[A-Za-z0-9 ,'-:]{2,50}$"),
        ],
      ],
      question_two: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(80),
          Validators.pattern("^[A-Za-z0-9 ,'//]{20,80}\\?$"),
        ],
      ],
      answer_two: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern("^[A-Za-z0-9 ,'-:]{2,50}$"),
        ],
      ],
      groups: [[], []],
      user_permissions: [[], []],
    });
  }

  onSubmit(regularUserForm: any) {
    this.usersService.createRegularUser(this.regularUserForm.value).subscribe(
      (data) => {
        this.regularUsers = data;
        this.usersService.getRegularUsers().subscribe(
          (data) => {
            this.regularUsers = data;
            this.providersService.logIn(
              this.regularUserForm.value.username,
              this.regularUserForm.value.password
            );
            // this.
            this.router.navigate(['/']);
            this.regularUserForm.reset();
          },
          (error) => (this.errorMsg = error)
        );
      },
      (error) => (this.errorMsg = error)
    );
  }

  get username() {
    return this.regularUserForm.get('username');
  }

  get password() {
    return this.regularUserForm.get('password');
  }

  get first_name() {
    return this.regularUserForm.get('first_name');
  }

  get last_name() {
    return this.regularUserForm.get('last_name');
  }

  get email() {
    return this.regularUserForm.get('email');
  }

  get is_active() {
    return this.regularUserForm.get('is_active');
  }

  get is_staff() {
    return this.regularUserForm.get('is_staff');
  }

  get is_superuser() {
    return this.regularUserForm.get('is_superuser');
  }

  get date_joined() {
    return this.regularUserForm.get('date_joined');
  }

  get last_login() {
    return this.regularUserForm.get('last_login');
  }

  get phone_number() {
    return this.regularUserForm.get('phone_number');
  }

  get address() {
    return this.regularUserForm.get('address');
  }

  get city() {
    return this.regularUserForm.get('city');
  }

  get state() {
    return this.regularUserForm.get('state');
  }

  get zip_code() {
    return this.regularUserForm.get('zip_code');
  }

  get question_one() {
    return this.regularUserForm.get('question_one');
  }

  get answer_one() {
    return this.regularUserForm.get('answer_one');
  }

  get question_two() {
    return this.regularUserForm.get('question_two');
  }

  get answer_two() {
    return this.regularUserForm.get('answer_two');
  }

  get groups() {
    return this.regularUserForm.get('groups');
  }

  get user_permissions() {
    return this.regularUserForm.get('user_permissions');
  }

  regularUsersList() {
    this.router.navigate(['/users']);
  }
}
