import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InterfaceComponent } from './interface/interface.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { KitchenRegisterComponent } from './interface/kitchen-register/kitchen-register.component';



@NgModule({
  declarations: [
    InterfaceComponent, 
    KitchenRegisterComponent],
    
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ]
})
export class ServiceModule { }
