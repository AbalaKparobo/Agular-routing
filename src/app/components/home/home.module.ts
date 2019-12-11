import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardComponent, ProductsComponent, SettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class HomeModule { }
