import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { KitchensService } from '../../services/kitchens.service';

@Component({
  selector: 'app-kitchen-list',
  templateUrl: './kitchen-list.component.html',
  styleUrls: ['./kitchen-list.component.css'],
})
export class KitchenListComponent implements OnInit {
  public kitchen: any;
  public errorMsg: any;
  public user: any;

  constructor(
    private router: Router,
    private kitchensService: KitchensService,
    private providersService: ProvidersService
  ) {
    this.kitchensService
      .getKitchenByUser(this.providersService.getUserId())
      .subscribe(
        (data: any) => (this.kitchen = data),
        (error: any) => (this.errorMsg = error),
        () => {
          console.log('Complete!');
        }
      );

    this.providersService.getUser().subscribe(
      (data) => (this.user = data),
      (error) => console.log(error),
      () => console.log(this.user)
    );
  }

  ngOnInit(): void {}

  kitchenDetail(kitchen: any): void {
    this.router.navigate(['/kitchens/', kitchen.id]);
  }

  kitchenCreate(): void {
    this.router.navigate(['/kitchen/register/']);
  }

  kitchenDelete(): void {
    console.log('delete');

    this.kitchensService.deleteKitchen(this.kitchen.id).subscribe(
      (data: any) => console.log(data),
      (error: any) => console.log(error),
      () => (this.kitchen = null)
    );
  }
}
