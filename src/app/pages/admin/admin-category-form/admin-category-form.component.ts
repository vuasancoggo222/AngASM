import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/Products';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  categoryForm: FormGroup
  categoryId : string
  constructor(private router: Router,
    private toastr : ToastrService,
    private activatedRoute : ActivatedRoute,
    private categoryService: CategoryService) {
      this.categoryId = ''
    this.categoryForm = new FormGroup({
      name : new FormControl('',[])
    })
  }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params['id'];
    console.log(this.categoryId);
    
    if (this.categoryId) {
      this.categoryService.getCategory(this.categoryId).subscribe(data => {
        this.categoryForm.patchValue({
          name : data.category_id.name
        });
      })
    }
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/category');
  }
  
  onSubmit() {
    const data = this.categoryForm.value; 
    if (this.categoryId !== '' && this.categoryId !== undefined) {
      return this.categoryService.updateCategory(this.categoryId, data).subscribe(data => {
        this.toastr.success('Cập nhật thành công')
        this.redirectToList();
      },err =>{
        this.toastr.error(err.error.message)
      })
    }
    return this.categoryService.createCategory(data).subscribe((data: Category) => {
      this.toastr.success('Thêm thành công')
      this.redirectToList();
    },err =>{
      this.toastr.error(err.error.message)
    })
  }
}
