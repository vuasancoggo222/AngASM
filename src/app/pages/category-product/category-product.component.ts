import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/Products';
@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  @Input() category : Category
  constructor(
    private activateRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.category = {
      _id : "",
      name : "",
      status : true,
    }
   
   }

  ngOnInit(): void { 
   console.log(this.activateRoute);
   
  }
}