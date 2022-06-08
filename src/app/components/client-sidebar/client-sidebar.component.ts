import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/types/Products';

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
  styleUrls: ['./client-sidebar.component.css']
})
export class ClientSidebarComponent implements OnInit {
  @Input('categories') categories: Category[]
  constructor() {
    this.categories = []
   }

  ngOnInit(): void {  
  }

}
