import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray, Validators } from '@angular/forms';
import { ProvidersService } from '../../DIservices/providers.service'

import { Router } from '@angular/router';
import { Kitchen } from 'src/app/DIservices/kitchen';
import { IKitchenUser } from 'src/app/DIservices/providers';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  public providersForm: any;
  public email_:any;
  public id_:any;
  public name_:any;



  constructor(private fb: FormBuilder, private proService: ProvidersService, private router: Router) {

  }

  ngOnInit(): void {
    this.providersForm = this.fb.group({
      name: [''], //testing validations NOT FINAL YET
      email: [''],
      id:[],
      //* PASSWORD REQUIREMENT AND VALIDATION */
      //To check a password between 8 to 15 characters which contain 
      // at least one lowercase letter, 
      // one uppercase letter, 
      // one numeric digit, 
      // and one special character

      password: [''],
      passwordConfirm: ['']
    });

  }

  // next() {

  //   this.router.navigate(['/register/']); //edit here child (next) click
  //   this.providersForm.reset();

  // }
  cancel() {
    this.router.navigate(['/home/']);
  }

  // getUserById(identifier: any) {
  //   identifier = this.id_;
  //   this.user = this.proService.getKitchenUserById(identifier).subscribe(
  //     (data) => this.user = data,
  //     (error) => this.errorMsg = error
  //   )
  // }

  next(formdata:any){
    this.name_ = this.providersForm.value.name;
    this.proService.setName(this.name_);
    this.router.navigate(['/register/',this.providersForm.value.id]);
  }


  get name() {
    return this.providersForm.get('name');
  }
  get id() {
    return this.providersForm.get('id');
  }

  get email() {
    return this.providersForm.get('email');
  }

  get password() {
    return this.providersForm.get('password');
  }

  get passwordConfirm() {
    return this.providersForm.get('passwordCornfirm');
  }

}
