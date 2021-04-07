import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './user.routing';
import { KitchenComponent } from './kitchen/kitchen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './detail/detail.component';
import { GetCountPipe } from './detail/detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    KitchenComponent,
    DetailComponent,
    GetCountPipe,
  ],
  imports: [CommonModule, routing, NgbModule],
})
export class UserModule {}
