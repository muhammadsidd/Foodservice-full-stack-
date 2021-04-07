import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-kitchen-user-create',
  templateUrl: './kitchen-user-create.component.html',
  styleUrls: ['./kitchen-user-create.component.css'],
  providers: [UsersService]
})
export class KitchenUserCreateComponent implements OnInit {
  public kitchenUserForm: any;
  public kitchenUser: any;
  public errorMsg: any;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.kitchenUserForm = this.fb.group({
      username: ["", [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(150),
        Validators.pattern("^[A-Za-z0-9]+$")
      ]],
      first_name: ["", [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(30),
        Validators.pattern("^[A-Za-z -']+$")
      ]],
      last_name: ["", [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(30),
        Validators.pattern("^[A-Za-z -']+$")
      ]],
      password: ["", [
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(150),
        Validators.pattern("^.{8,150}$")
      ]], 
      email: ["", [
        Validators.required, 
        Validators.minLength(8),
        Validators.maxLength(50),
        Validators.pattern("[A-Za-z0-9\\._-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,}")
      ]],
      is_active: [true, [
        Validators.required, 
      ]],
      is_staff: [true, [
        Validators.required, 
      ]],
      is_superuser: [false, [
        Validators.required, 
      ]],
      date_joined: [new Date(), [
        Validators.required, 
      ]],
      last_login: [null, []],
      phone_number: ["", [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(12),
        Validators.pattern("^\\d{3}-\\d{3}-\\d{4}$")
      ]],
      address: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern("^\\d{1,5} [a-zA-Z0-9\\. ]+$")
      ]],
      city: ["", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
        Validators.pattern("^[a-zA-Z\\. -']+$")
      ]],
      state: ["", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.pattern("^[A-Z]{2}$")
      ]],
      zip_code: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern("^\\d{5}(-\\d{4})?$")
      ]],
      question_one: ["", [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(80),
        Validators.pattern("^[A-Za-z0-9 ,'//]{20,80}\\?$")
      ]],
      answer_one: ["", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern("^[A-Za-z0-9 ,'-:]{2,50}$")
      ]],
      question_two: ["", [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(80),
        Validators.pattern("^[A-Za-z0-9 ,'//]{20,80}\\?$")
      ]],
      answer_two: ["", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern("^[A-Za-z0-9 ,'-:]{2,50}$")
      ]],
      groups: [[], []],
      user_permissions: [[], []]
    });
  }

  onSubmit(kitchenUserForm: any){
    this.usersService.createKitchenUser(this.kitchenUserForm.value).subscribe(
      (data) => {
        this.kitchenUser = data;
        this.router.navigate(['/kitchens/register']);
        this.kitchenUserForm.reset();
      },
      (error) => this.errorMsg = error
    )
  }

  get username() {
    return this.kitchenUserForm.get('username');
  }

  get password() {
    return this.kitchenUserForm.get('password');
  }

  get first_name() {
    return this.kitchenUserForm.get('first_name');
  }

  get last_name() {
    return this.kitchenUserForm.get('last_name');
  }

  get email() {
    return this.kitchenUserForm.get('email');
  }

  get is_active() {
    return this.kitchenUserForm.get('is_active');
  }

  get is_staff() {
    return this.kitchenUserForm.get('is_staff');
  }

  get is_superuser() {
    return this.kitchenUserForm.get('is_superuser');
  }

  get date_joined() {
    return this.kitchenUserForm.get('date_joined');
  }

  get last_login() {
    return this.kitchenUserForm.get('last_login');
  }

  get phone_number() {
    return this.kitchenUserForm.get('phone_number');
  }

  get address() {
    return this.kitchenUserForm.get('address');
  }

  get city() {
    return this.kitchenUserForm.get('city');
  }

  get state() {
    return this.kitchenUserForm.get('state');
  }

  get zip_code() {
    return this.kitchenUserForm.get('zip_code');
  }

  get question_one() {
    return this.kitchenUserForm.get('question_one');
  }

  get answer_one() {
    return this.kitchenUserForm.get('answer_one');
  }

  get question_two() {
    return this.kitchenUserForm.get('question_two');
  }

  get answer_two() {
    return this.kitchenUserForm.get('answer_two');
  }

  get groups() {
    return this.kitchenUserForm.get('groups');
  }

  get user_permissions() {
    return this.kitchenUserForm.get('user_permissions');
  }

  kitchenUsersList(){
    this.router.navigate(['/users/kitchens'])
  }
}
