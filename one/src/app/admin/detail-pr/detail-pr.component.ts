import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {IProduct} from "../../../app/interfaces/Product"
// import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-pr',
  templateUrl: './detail-pr.component.html',
  styleUrls: ['./detail-pr.component.scss']
})
export class DetailPrComponent {
  getOneProduct:IProduct = {
    name: "",
    price: 0,
    id:0,
    img:""
  }
  constructor(
    private router: ActivatedRoute,
    private detaiPr: ProductService
  ) {
    this.router.paramMap.subscribe((params) => {
      const id = Number(params.get("id"));
      this.detaiPr.getProductId(id).subscribe((product) => {
        this.getOneProduct = product;
        console.log(this.getOneProduct);
        
      }
      // , error => console.log(error)
      )
    })
  }
}
