import { Component } from '@angular/core';
import {ProductService} from "src/app/services/product.service"
@Component({
  selector: 'app-add-pr',
  templateUrl: './add-pr.component.html',
  styleUrls: ['./add-pr.component.scss']
})
export class AddPrComponent {
  constructor(private addPr:ProductService){}
  data={
    name:"",
    price:0,
    img:"https://picsum.photos/300/100"

  }
  onAddPr(){
    this.addPr.addProduct(this.data).subscribe();
  }
}
