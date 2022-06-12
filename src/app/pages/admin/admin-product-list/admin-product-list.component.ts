import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../service/products.service';
import { Product } from '../../../types/Products';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];

  // Định nghĩa service dưới tên 1 biến, đã tạo bên services
  constructor(private productService: ProductService, private toastr : ToastrService) {
    this.products = [];
  }

  // Khi component render xong sẽ chạy 1 lần vào ngOnInit
  ngOnInit(): void {
    this.onGetList();
  }

  // Lấy ds sẽ được gọi khi lần đầu render và khi xoá mỗi phần tử
  onGetList() {
    // Lắng nghe API trả về kq, bao giờ trả về xong thì data sẽ có dữ liệu
    this.productService.getProducts().subscribe((data: Product[]) => {
      // Khi có dữ liệu sẽ gán về cho danh sách
      this.products = data;
    });
  }

  onDelete(id: string | number) {
    // confirm
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');
    // kiểm tra dữ liệu => xoá
    if (confirmDelete && id) {
      this.productService.deleteProduct(id).subscribe((data: any) => {
        // Cập nhật lại danh sách
        this.onGetList();
        this.toastr.success('Delete successfully')
      },err =>{
        this.toastr.error(err.error.message)
      })
    }
  }
  changeStatus(id: string) {
    const productTarget = this.products.find(item => item._id === id);
    const currentStatus = productTarget?.status
    const confirm = window.confirm('Are you sure you want to change this status ?')
    if(confirm) {
      this.productService.updateProduct(`${id}`,{
        status : !currentStatus
      }).subscribe(data => {
        this.onGetList();
      });
      this.toastr.success('Change status successfully')
    }
    
  }
  }

