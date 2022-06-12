import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/Products';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  categories : Category[]
  constructor(private categoryService: CategoryService, private toastr : ToastrService) {
    this.categories = []
   }

  ngOnInit(): void {
  this.onGetList();
  }
  onGetList(){
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }
  onDelete(id: string | number) {
    // confirm
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');
    // kiểm tra dữ liệu => xoá
    if (confirmDelete && id) {
      this.categoryService.deleteCategory(id).subscribe((data: any) => {
        // Cập nhật lại danh sách
        this.onGetList();
        this.toastr.success('Delete successfully')
      },err =>{
        this.toastr.error(err.error.message)
      })
    }
  }
  changeStatus(id: string) {
    const categoryTarget = this.categories.find(item => item._id === id);
    const currentStatus = categoryTarget?.status
    console.log(currentStatus);
    
    const confirm = window.confirm('Are you sure you want to change this status ?')
    if(confirm) {
      if(!currentStatus){
        this.categoryService.updateCategory(`${id}`,{
          status : 1
        }).subscribe(data => {
          this.onGetList();
        });
      }
      else{
        this.categoryService.updateCategory(`${id}`,{
          status : 0
        }).subscribe(data => {
          this.onGetList();
        });
      }
      this.toastr.success('Change status successfully')
    }
    
  }
}
