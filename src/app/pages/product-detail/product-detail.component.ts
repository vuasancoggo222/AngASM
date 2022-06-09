import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductService } from 'src/app/service/products.service';
import { Product } from 'src/app/types/Products';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product
  cartItemValue: number = 1;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private lsService : LocalStorageService,
    private toastr : ToastrService
  ) {
    this.product = {
      name : '',
      _id : '',
      price : 0,
      description : '',
      image : '',
      sale_price: 0,
      status : true,
      category_id : ''

    }
   }
  
  
  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['id']
    console.log(idFromUrl);
    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
      console.log(this.product);
    })
  }
  onInputValueChange(event: any) {
    this.cartItemValue = event.target.value; 
  }
  onAddToCart() {
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      price : +this.product.price,
      image: this.product.image,
      value: +this.cartItemValue
    };
    if(addItem.value < 1){
      this.toastr.error('Vui lòng lựa chọn số lượng sản phẩm hợp lệ')
    }
    else{
      this.lsService.setItem(addItem);
    this.cartItemValue = 1;
    this.toastr.success('Thêm vào giỏ hàng thành công')
    }
}
}
