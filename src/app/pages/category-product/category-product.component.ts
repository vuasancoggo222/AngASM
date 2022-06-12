import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { SharedService } from 'src/app/service/shared.service';
import { Category, Product } from 'src/app/types/Products';
@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  category : any
  constructor(
    private activateRoute: ActivatedRoute,
    private categoryService: CategoryService,
    public sharedService : SharedService
  ) {
    this.category = {
      _id : "",
      name : "",
      status : true,
    }
   
   }

  ngOnInit(): void { 
    this.category = this.sharedService.message;
    console.log(this.category);
    
  }
}