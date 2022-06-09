import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/Products';
@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  categories: Category[];
  category : Category
  @Output() handleGetCategory : EventEmitter<any> 
  constructor(private categoryService: CategoryService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    ) { 
    this.categories = []
    this.handleGetCategory = new EventEmitter()
    this.category = {
      _id : "",
      name : "",
      status : true,
    }
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
  onGetCategory(id: string){
    this.categoryService.getCategory(id).subscribe(data => {
      this.category = data;
      console.log(this.category);
    })
  }
    
  }

