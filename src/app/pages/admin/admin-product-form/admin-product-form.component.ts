import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/types/Products';
import { ProductService } from '../../../service/products.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private productService: ProductService, // các phương thức call API
    private router: Router // điều hướng
  ) {
    this.productForm = new FormGroup({
      // name: new FormControl('', Validators.required), // FormControl(giá trị mặc định)
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasProduct // chỉ gọi lại tên của hàm validate
      ]), // FormControl(giá trị mặc định)
      // price: new FormControl(0)
    });
  }

  ngOnInit(): void {
  }

  // required (control: AbstractControl): ValidationErrors|null {
  //   if (....) {
  //     return {required: true};
  //   }
  //   return null;
  // }

  onValidateNameHasProduct (control: AbstractControl): ValidationErrors|null {
    const inputValue = control.value;

    if (!inputValue.includes('product')) {
      return {hasProductError: true};
    }

    return null;
  }

  onSubmit() {
    console.log(this.productForm.value);
    // 1. nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value;
    // 2. Call API tạo mới
    this.productService.createProduct(data).subscribe((data: Product) => {
      // 3. Quay lại danh sách product
      this.router.navigate(['/admin', 'products']);
      // 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API
      // lấy ds mới
    })
  }

}
