import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/Products';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService) { 
    this.categories = []
  }

  ngOnInit(): void {
    this.onGetCategories()
  }
  onGetCategories() {
    // Lắng nghe API trả về kq, bao giờ trả về xong thì data sẽ có dữ liệu
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      // Khi có dữ liệu sẽ gán về cho danh sách
      this.categories = data;
      console.log(data);
    });
  }
}
