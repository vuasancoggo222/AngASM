import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/products.service';
import { Product } from 'src/app/types/Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
