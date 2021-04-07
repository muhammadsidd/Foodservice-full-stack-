// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RegularUserListComponent } from './users/components/regular-user-list/regular-user-list.component';
import { KitchenUserListComponent } from './users/components/kitchen-user-list/kitchen-user-list.component';
import { RegularUserDetailComponent } from './users/components/regular-user-detail/regular-user-detail.component';
import { KitchenUserDetailComponent } from './users/components/kitchen-user-detail/kitchen-user-detail.component';
import { RegularUserCreateComponent } from './users/components/regular-user-create/regular-user-create.component';
import { KitchenUserCreateComponent } from './users/components/kitchen-user-create/kitchen-user-create.component';
import { RegularUserUpdateComponent } from './users/components/regular-user-update/regular-user-update.component';
import { KitchenUserUpdateComponent } from './users/components/kitchen-user-update/kitchen-user-update.component';
import { KitchenListComponent } from './kitchens/components/kitchen-list/kitchen-list.component';
import { KitchenDetailComponent } from './kitchens/components/kitchen-detail/kitchen-detail.component';
import { KitchenCreateComponent } from './kitchens/components/kitchen-create/kitchen-create.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './users/components/login/login.component';
import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [
    AppComponent,
    RegularUserListComponent,
    KitchenUserListComponent,
    RegularUserDetailComponent,
    KitchenUserDetailComponent,
    RegularUserCreateComponent,
    KitchenUserCreateComponent,
    RegularUserUpdateComponent,
    KitchenUserUpdateComponent,
    KitchenListComponent,
    KitchenDetailComponent,
    KitchenCreateComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    NgbModule,
    ServiceModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
