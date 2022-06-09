import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/types/Products';

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
  styleUrls: ['./client-sidebar.component.css']
})
export class ClientSidebarComponent implements OnInit {
  @Input('categories') categories: Category[]
  @Output() handleGetCategory: EventEmitter<any>
  constructor() {
    this.categories = []
    this.handleGetCategory = new EventEmitter()
   }

  ngOnInit(): void {  
  }
  onGetCategory(id: string){
    this.handleGetCategory.emit(id)
  }
}
