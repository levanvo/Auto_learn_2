import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-update-pr',
  templateUrl: './update-pr.component.html',
  styleUrls: ['./update-pr.component.scss']
})
export class UpdatePrComponent {
  product: IProduct = {
    name: "",
    price: 0,
    img:"htpps://picsum.photos/300/100"
  }

  constructor(
    private updatePr: ProductService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.updatePr.getProductId(id).subscribe(product => {
        this.product = product;
        console.log(id);
        
      }, error => console.log(error.message))
    })
  }

  onHandleSubmit() {
    this.updatePr.updateProduct(this.product).subscribe(product => {
      console.log(product);
    })
    console.log(this.product);
    
  }
}
