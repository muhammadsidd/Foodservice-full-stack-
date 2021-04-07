import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-kitchen-user-update',
  templateUrl: './kitchen-user-update.component.html',
  styleUrls: ['./kitchen-user-update.component.css']
})
export class KitchenUserUpdateComponent implements OnInit {
  public kitchenUserForm: any;
  public kitchenUser: any;
  public id: any;
  public errorMsg: any;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.kitchenUser = this.usersService.getKitchenUser(this.id).subscribe(
        (data) => {
          this.kitchenUser = data;
          this.kitchenUserForm = this.fb.group({
            username: [this.kitchenUser.username, [
              Validators.required, 
              Validators.minLength(2), 
              Validators.maxLength(150),
              Validators.pattern("^[A-Za-z0-9]+$")
            ]],
            first_name: [this.kitchenUser.first_name, [
              Validators.required, 
              Validators.minLength(2), 
              Validators.maxLength(30),
              Validators.pattern("^[A-Za-z -']+$")
            ]],
            last_name: [this.kitchenUser.last_name, [
              Validators.required, 
              Validators.minLength(2), 
              Validators.maxLength(30),
              Validators.pattern("^[A-Za-z -']+$")
            ]],
            password: [this.kitchenUser.password, [
              Validators.required, 
              Validators.minLength(8), 
              Validators.maxLength(150),
              Validators.pattern("^.{8,150}$")
            ]], 
            email: [this.kitchenUser.email, [
              Validators.required, 
              Validators.minLength(8),
              Validators.maxLength(50),
              Validators.pattern("[A-Za-z0-9\\._-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,}")
            ]],
            is_active: [this.kitchenUser.is_active, [
              Validators.required, 
            ]],
            is_staff: [this.kitchenUser.is_staff, [
              Validators.required,  
            ]],
            is_superuser: [this.kitchenUser.is_superuser, [
              Validators.required, 
            ]],
            date_joined: [this.kitchenUser.date_joined, [
              Validators.required, 
            ]],
            last_login: [this.kitchenUser.last_login, []],
            phone_number: [this.kitchenUser.phone_number, [
              Validators.required, 
              Validators.minLength(3), 
              Validators.maxLength(12),
              Validators.pattern("^\\d{3}-\\d{3}-\\d{4}$")
            ]],
            address: [this.kitchenUser.address, [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(40),
              Validators.pattern("^\\d{1,5} [a-zA-Z0-9\\. ]+$")
            ]],
            city: [this.kitchenUser.city, [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(25),
              Validators.pattern("^[a-zA-Z\\. -']+$")
            ]],
            state: [this.kitchenUser.state, [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(2),
              Validators.pattern("^[A-Z]{2}$")
            ]],
            zip_code: [this.kitchenUser.zip_code, [
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(10),
              Validators.pattern("^\\d{5}(-\\d{4})?$")
            ]],
            question_one: [this.kitchenUser.question_one, [
              Validators.required,
              Validators.minLength(20),
              Validators.maxLength(80),
              Validators.pattern("^[A-Za-z0-9 ,'//]{20,80}\\?$")
            ]],
            answer_one: [this.kitchenUser.answer_one, [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(50),
              Validators.pattern("^[A-Za-z0-9 ,'-:]{2,50}$")
            ]],
            question_two: [this.kitchenUser.question_two, [
              Validators.required,
              Validators.minLength(20),
              Validators.maxLength(80),
              Validators.pattern("^[A-Za-z0-9 ,'//]{20,80}\\?$")
            ]],
            answer_two: [this.kitchenUser.answer_two, [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(50),
              Validators.pattern("^[A-Za-z0-9 ,'-:]{2,50}$")
            ]],
            groups: [this.kitchenUser.groups, []],
            user_permissions: [this.kitchenUser.user_permissions, []]
          });
        },
        (error) => this.errorMsg = error
      );
     });
  }

  onSubmit(kitchenUserForm: any){
    this.usersService.updateKitchenUser(this.id, this.kitchenUserForm.value).subscribe(
      (data) => {
        this.kitchenUser = data;
        this.router.navigate(['/users/kitchens', this.kitchenUser.id]);
        this.kitchenUserForm.reset();
      },
      (error) => this.errorMsg = error
    );
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
