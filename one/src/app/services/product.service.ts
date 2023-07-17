import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
// get all
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/user`);
  }
  // remove
  deleteProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/user/${id}`);
  }
  // get One
  getProductId(id:number|string):Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/user/${id}`);
  }
  // add
  addProduct(data:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(`http://localhost:3000/user`,data);
  }
  // update
  updateProduct(data:IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/user/${data.id}`,data);
  }
}