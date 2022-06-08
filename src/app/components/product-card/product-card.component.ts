import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input('category') category: string
  constructor() {
    this.product = {
      name : '',
      price: 0,
      sale_price: 0,
      description: '',
      status: true,
      image: '',
      _id: '',
      category_id : {}
    };
    this.category = ''
  }
  ngOnInit(): void {
    console.log(this.product.category_id.name);
  }
}
