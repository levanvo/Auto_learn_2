import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutDashboardComponent } from './admin/layout/layout-dashboard/layout-dashboard.component';
import { LayoutSettingComponent } from './admin/layout/layout-setting/layout-setting.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { DetailPrComponent } from './admin/detail-pr/detail-pr.component';
import { UpdatePrComponent } from './Component/update-pr/update-pr.component';
import { AddPrComponent } from './Component/add-pr/add-pr.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LayoutDashboardComponent,
    LayoutSettingComponent,
    ProductListComponent,
    DetailPrComponent,
    UpdatePrComponent,
    AddPrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
