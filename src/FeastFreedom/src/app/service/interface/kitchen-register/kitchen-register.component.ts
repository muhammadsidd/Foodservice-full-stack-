import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { KitchensService } from 'src/app/kitchens/services/kitchens.service';
import { InterfaceComponent } from '../interface.component';

@Component({
  selector: 'app-kitchen-register',
  templateUrl: './kitchen-register.component.html',
  styleUrls: ['./kitchen-register.component.css'],
})
export class KitchenRegisterComponent implements OnInit {
  public ProductHeader = [{ name: 'Hp' }, { name: 'Dell' }, { name: 'Lenovo' }];
  public kitchenForm: any;
  kitchen: any;
  errorMsg: any;
  userId: any;

  days: Array<String> = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  timein: any = [
    '07:00 AM',
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
  ];

  timeout: Array<String> = [
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
    '09:00 PM',
    '10:00 PM',
    '11:00 PM',
    '12:00 AM',
  ];

  constructor(
    private actRoute: ActivatedRoute,
    private fb: FormBuilder,
    private proService: ProvidersService,
    private router: Router,
    private jwt: JwtHelperService
  ) {}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userId = Number(id);
    });

    this.kitchenForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern("^[A-Za-z0-9: ,'&@-]{2,50}$"),
        ],
      ],
      user: [this.userId, Validators.required],
      // workdays: this.addDaysControls(), //testing validations NOT FINAL YET
      workdays: this.fb.array([
        this.fb.group({
          // day: this.addDaysControls(),
          day: ['', [Validators.required]],
          start_time: ['', [Validators.required]],
          end_time: ['', [Validators.required]],
        }),
      ]),

      menu: this.fb.array([
        this.fb.group({
          name: [
            '',
            [
              Validators.required,
              Validators.min(3),
              Validators.max(50),
              Validators.pattern("^[A-Za-z0-9 //,'-]{3,50}$"),
            ],
          ],
          vegan: [false, Validators.required],
          price: [
            null,
            [Validators.required, Validators.min(0), Validators.max(1000000)],
          ],
        }),
      ]),

      featured: [false, [Validators.required]],
      image: '',
    });
  }

  addDaysControls() {
    const arr = this.days.map((element) => {
      return this.fb.control(false);
    });

    return this.fb.array(arr);
  }

  // get daysArray(){
  //   return <FormArray>this.kitchenForm.get('workdays');
  // }

  addNewItem() {
    const itemLength = this.menuArray.length;
    const newitem = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.min(3),
          Validators.max(50),
          Validators.pattern("^[A-Za-z0-9 //,'-]{3,50}$"),
        ],
      ],
      vegan: [false, Validators.required],
      price: [
        null,
        [Validators.required, Validators.min(0), Validators.max(1000000)],
      ],
    });

    this.menuArray.push(newitem);
  }

  removeMenuItem(index: number) {
    this.menuArray.removeAt(index);
  }

  addNewDay() {
    const itemLength = this.workdaysArray.length;
    const newitem = this.fb.group({
      day: ['', [Validators.required]],
      start_time: ['', [Validators.required]],
      end_time: ['', [Validators.required]],
    });

    this.workdaysArray.push(newitem);
  }

  removeWorkDay(index: number) {
    this.workdaysArray.removeAt(index);
  }

  Save(kitchenForm: any) {
    const item = {
      menu: this.kitchenForm.value.menu.map((plate: any) => plate),
      name: this.kitchenForm.value.name,
      workdays: this.kitchenForm.value.workdays,
      user: this.jwt.decodeToken(localStorage.getItem('access') || '').user_id,
      featured: this.kitchenForm.value.featured,
      image: '',
    };
    console.log(item);

    this.proService.postKitchen(item).subscribe(
      (data) => {
        this.kitchen = data;
        console.log(this.kitchen);
        this.proService.getKitchen().subscribe(
          (data) => (this.kitchen = data),
          (error) => {
            this.errorMsg = error;
            console.log(error);
          },
          () => this.router.navigate(['kitchens'])
        );
      },
      (error) => {
        this.errorMsg = error;
        console.log(error);
      }
    );
    // this.router.navigate(['home']);
    // this.kitchenForm.reset();
  }
  get user() {
    return this.kitchenForm.controls.user;
  }

  getName() {
    return this.kitchenForm.controls.name;
  }

  get vegan() {
    let v = <FormGroup>this.kitchenForm.controls.menu;
    return v.controls.vegan;
  }

  get price() {
    let p = <FormGroup>this.kitchenForm.controls.menu;
    return p.controls.name;
  }

  get day() {
    let d = <FormGroup>this.kitchenForm.controls.workdays;
    return d.controls.day;
  }

  get start_time() {
    let s = <FormGroup>this.kitchenForm.controls.workdays;
    return s.controls.start_time;
  }

  get end_time() {
    let e = <FormGroup>this.kitchenForm.controls.workdays;
    return e.controls.end_time;
  }

  get featured() {
    return this.kitchenForm.get('featured');
  }

  get menuArray() {
    return <FormArray>this.kitchenForm.get('menu');
  }

  get workdaysArray() {
    return <FormArray>this.kitchenForm.get('workdays');
  }
}
