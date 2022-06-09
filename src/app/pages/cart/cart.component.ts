import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductCart } from 'src/app/types/Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ProductCart[] = [];
   cartItemValues: number = 0;
  constructor(private lsService: LocalStorageService,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.onSetCartItems();
    this.lsService.watchService().subscribe(data => {
      this.onSetCartItems();
    });
  }
  onSetCartItems () {
    this.cartItems = this.lsService.getItem();

    this.cartItemValues = 0;
    this.cartItems.forEach(item => {
      this.cartItemValues += item.value;
    });
  }
  removeProduct(id : string){
    const confirm = window.confirm('Bạn có chắc chắn muốn xoá sản phẩm này ?')
    if(confirm){
     this.cartItems = this.cartItems.filter(item => item._id !== id)
     console.log(this.cartItems);
     localStorage.setItem('cart', JSON.stringify(this.cartItems))
     this.toastr.success('Xoá sản phẩm thành công !','',{
       timeOut : 500
     })
    }
    
  }
}
