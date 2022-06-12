import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { SharedService } from 'src/app/service/shared.service';
import { Category } from 'src/app/types/Products';

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
  styleUrls: ['./client-sidebar.component.css']
})
export class ClientSidebarComponent implements OnInit {
  @Input('categories') categories: Category []
  category : any
  constructor(private sharedService : SharedService,private categoryService: CategoryService) {
    this.categories = [],
    this.category = {}
   }
  ngOnInit(): void {
 
  }
  onGetCategory(id: string){
    this.categoryService.getCategory(id).subscribe(data => {
      this.category = data;
      this.sharedService.sentMess(this.category)
    })
  }
}
