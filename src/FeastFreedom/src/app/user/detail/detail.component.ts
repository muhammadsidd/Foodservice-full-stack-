// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plate } from 'src/app/DIservices/plate';
import { Pipe, PipeTransform } from '@angular/core';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Service
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { Order } from 'src/app/DIservices/order';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public id: number;
  public kitchen: any;
  public user: any;
  public error: any;
  public order: any;

  constructor(
    private route: ActivatedRoute,
    private providersService: ProvidersService,
    private modalService: NgbModal
  ) {
    // Gets kitchen id
    this.id = this.route.snapshot.params.id;
    // Gets kitchen
    this.providersService.getKitchen(this.id).subscribe(
      // Defines kitchen
      (data) => (this.kitchen = data),
      // Defines error
      (error) => (this.error = error),
      () => {
        // Defines order
        const items = [];
        for (const plate in this.kitchen.menu) {
          if (Object.prototype.hasOwnProperty.call(this.kitchen.menu, plate)) {
            const element = this.kitchen.menu[plate];
            items.push({ count: 0, name: element.name });
          }
        }
        this.order = {
          id: Date.now(),
          kitchen_id: this.kitchen.id,
          user_id: this.providersService.getUserId(),
          items,
          total: 0,
        };
      }
    );
  }

  ngOnInit(): void {}

  // Order
  addPlate(id: string): void {
    if (this.order.items) {
      this.order.items = this.order.items.map((plate: any) => {
        if (plate.name === id) {
          plate.count += 1;
        }
        // plate.count = plate.name === id ? plate.count + 1 : plate.count;

        return plate;
      });

      this.changePrice(id, true);

      // localStorage.setItem('cart', JSON.stringify(this.order));
    }
  }
  removePlate(id: string): void {
    if (this.order.items) {
      this.order.items = this.order.items.map((plate: any) => {
        // Decrease price if possible
        if (plate.name === id && plate.count >= 1) {
          this.changePrice(id, false);
          plate.count -= 1;
        }

        return plate;
      });
    }
  }
  placeOrder(): void {
    this.providersService.postOrder(this.order).subscribe(
      (data) => console.log(data),
      (error) => console.log(error),
      () => console.log('Posted')
    );
    console.log(this.order);
  }

  // Modal
  open(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  // Modify price
  private changePrice(id: string, increase: boolean): void {
    increase
      ? (this.order.total += this.kitchen.menu.filter(
          (item: any) => item.name === id
        )[0].price)
      : (this.order.total -= this.kitchen.menu.filter(
          (item: any) => item.name === id
        )[0].price);
  }
}

// Count plates in order pipe
@Pipe({
  name: 'getCount',
})
export class GetCountPipe implements PipeTransform {
  public constructor() {}

  transform(value: Array<any>, id: string): any {
    for (const plate in value) {
      if (Object.prototype.hasOwnProperty.call(value, plate)) {
        const element = value[plate];
        if (element.name === id) {
          return element.count;
        }
      }
    }
    return 0;
  }
}
