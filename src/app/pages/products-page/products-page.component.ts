import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/types/Products';
import { ProductService } from 'src/app/service/products.service';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { 
    this.products = []
  }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList() {
    // Lắng nghe API trả về kq, bao giờ trả về xong thì data sẽ có dữ liệu
    this.productService.getProducts().subscribe((data: Product[]) => {
      // Khi có dữ liệu sẽ gán về cho danh sách
      this.products = data;
      console.log(data);
    });
  }
}
