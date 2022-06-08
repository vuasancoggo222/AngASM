import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../../../service/products.service"
import { Product } from '../../../types/Products';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute
  ) {
    this.product = {
      _id: '',
      name: '',
      price : 0,
      sale_price : 0,
      category_id : '',
      description: '',
      image : '',
      status : true


    };
  }

  ngOnInit(): void {
    // ActivateRoute sẽ có thể đọc biến được truyền vào trên url
    // tên id được định nghĩa ở app-routing :id
    const idFromUrl = this.activateRoute.snapshot.params['id'];

    this.productService.getProduct(idFromUrl).subscribe((data: Product) => {
      this.product = data;
      // console.log(this.product);

    })
  }

}