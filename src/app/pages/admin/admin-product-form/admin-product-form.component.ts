import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { Category, Product } from 'src/app/types/Products';
import { ProductService } from '../../../service/products.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  categories : Category[]
  productId: string
  constructor(
    private productService: ProductService, // các phương thức call API
    private router: Router,
    private categoryService: CategoryService,
    private activatedRoute : ActivatedRoute,
    private toastr : ToastrService
  ) {
    this.productId = ''
    this.categories = []
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]),
      price : new FormControl(0, []),
      sale_price : new FormControl(0,[]),
      description : new FormControl('',[]),
      image : new FormControl('',[]),
      category_id : new FormControl('',[]),
    });
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    console.log(this.productId);
    
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories
    })
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
     
        this.productForm.patchValue(data);
      })
    }
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/products');
  }
  
  onSubmit() {
    const data = this.productForm.value; 
    if (this.productId !== '' && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, data).subscribe(data => {
        this.toastr.success('Cập nhật thành công')
        this.redirectToList();
      },err =>{
        this.toastr.error(err.error.message)
      })
    }
    return this.productService.createProduct(data).subscribe((data: Product) => {
      this.toastr.success('Thêm thành công')
      this.redirectToList();
    },err =>{
      this.toastr.error(err.error.message)
    })
  }

}
