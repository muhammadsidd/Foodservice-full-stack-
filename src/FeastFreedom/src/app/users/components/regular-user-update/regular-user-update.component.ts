import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-regular-user-update',
  templateUrl: './regular-user-update.component.html',
  styleUrls: ['./regular-user-update.component.css']
})
export class RegularUserUpdateComponent implements OnInit {
  public regularUserForm: any;
  public regularUser: any;
  public id: any;
  public errorMsg: any;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.regularUser = this.usersService.getRegularUser(this.id).subscribe(
        (data) => {
          this.regularUser = data;
          this.regularUserForm = this.fb.group({
            username: [this.regularUser.username, [
              Validators.required, 
              Validators.minLength(2), 
              Validators.maxLength(150),
              Validators.pattern("^[A-Za-z0-9]+$")
            ]],
            first_name: [this.regularUser.first_name, [
              Validators.required, 
              Validators.minLength(2), 
              Validators.maxLength(30),
              Validators.pattern("^[A-Za-z -']+$")
            ]],
            last_name: [this.regularUser.last_name, [
              Validators.required, 
              Validators.minLength(2), 
              Validators.maxLength(30),
              Validators.pattern("^[A-Za-z -']+$")
            ]],
            password: [this.regularUser.password, [
              Validators.required, 
              Validators.minLength(8), 
              Validators.maxLength(150),
              Validators.pattern("^.{8,150}$")
            ]], 
            email: [this.regularUser.email, [
              Validators.required, 
              Validators.minLength(8),
              Validators.maxLength(50),
              Validators.pattern("[A-Za-z0-9\\._-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,}")
            ]],
            is_active: [this.regularUser.is_active, [
              Validators.required, 
            ]],
            is_staff: [this.regularUser.is_staff, [
              Validators.required,  
            ]],
            is_superuser: [this.regularUser.is_superuser, [
              Validators.required, 
            ]],
            date_joined: [this.regularUser.date_joined, [
              Validators.required, 
            ]],
            last_login: [this.regularUser.last_login, []],
            phone_number: [this.regularUser.phone_number, [
              Validators.required, 
              Validators.minLength(3), 
              Validators.maxLength(12),
              Validators.pattern("^\\d{3}-\\d{3}-\\d{4}$")
            ]],
            address: [this.regularUser.address, [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(40),
              Validators.pattern("^\\d{1,5} [a-zA-Z0-9\\. ]+$")
            ]],
            city: [this.regularUser.city, [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(25),
              Validators.pattern("^[a-zA-Z\\. -']+$")
            ]],
            state: [this.regularUser.state, [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(2),
              Validators.pattern("^[A-Z]{2}$")
            ]],
            zip_code: [this.regularUser.zip_code, [
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(10),
              Validators.pattern("^\\d{5}(-\\d{4})?$")
            ]],
            question_one: [this.regularUser.question_one, [
              Validators.required,
              Validators.minLength(20),
              Validators.maxLength(80),
              Validators.pattern("^[A-Za-z0-9 ,'//]{20,80}\\?$")
            ]],
            answer_one: [this.regularUser.answer_one, [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(50),
              Validators.pattern("^[A-Za-z0-9 ,'-:]{2,50}$")
            ]],
            question_two: [this.regularUser.question_two, [
              Validators.required,
              Validators.minLength(20),
              Validators.maxLength(80),
              Validators.pattern("^[A-Za-z0-9 ,'//]{20,80}\\?$")
            ]],
            answer_two: [this.regularUser.answer_two, [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(50),
              Validators.pattern("^[A-Za-z0-9 ,'-:]{2,50}$")
            ]],
            groups: [this.regularUser.groups, []],
            user_permissions: [this.regularUser.user_permissions, []]
          });
        },
        (error) => this.errorMsg = error
      );
     });
  }

  onSubmit(regularUserForm: any){
    this.usersService.updateRegularUser(this.id, this.regularUserForm.value).subscribe(
      (data) => {
        this.regularUser = data;
        this.router.navigate(['/users', this.regularUser.id]);
        this.regularUserForm.reset();
      },
      (error) => this.errorMsg = error
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

  regularUsersList(){
    this.router.navigate(['/users'])
  }
}
