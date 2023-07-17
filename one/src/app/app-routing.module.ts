import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutDashboardComponent } from './admin/layout/layout-dashboard/layout-dashboard.component';
import { LayoutSettingComponent } from './admin/layout/layout-setting/layout-setting.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { DetailPrComponent } from './admin/detail-pr/detail-pr.component';
import { UpdatePrComponent } from './Component/update-pr/update-pr.component';
import { AddPrComponent } from './Component/add-pr/add-pr.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductListComponent,children:[
    {path:'updatePr/:id',component:UpdatePrComponent},
    {path:"addProduct",component:AddPrComponent},
  ]},
  {path:"admin",component:AdminComponent,children:[
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    {path:"dashboard",component:LayoutDashboardComponent,children:[
      {path:"product/:id",component:DetailPrComponent},
      
      // {path:"",component:LayoutDashboardComponent},
    ]},
    {path:"setting",component:LayoutSettingComponent},
  ]},
  {path:"**",component:HomeComponent,pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
