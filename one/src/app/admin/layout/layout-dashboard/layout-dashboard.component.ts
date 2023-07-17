import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrls: ['./layout-dashboard.component.scss']
})
export class LayoutDashboardComponent {
  getAllProducts:IProduct[]=[];
  constructor(
    private getProducts:ProductService
    ){
      this.getProducts.getProducts().subscribe((allproducts)=>{
        console.log(allproducts);
        this.getAllProducts=allproducts;
      })
  }
}
