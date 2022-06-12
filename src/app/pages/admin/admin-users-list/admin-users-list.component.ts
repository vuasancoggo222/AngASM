import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.css']
})
export class AdminUsersListComponent implements OnInit {
  users : any
  constructor(private userService: AuthService, private toastr : ToastrService) {
    this.users = []
   }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  onDelete(id: string ) {
    const targetUser = this.users.find((item: { _id: string; }) => item._id === id);
    console.log(targetUser);
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');
    if (confirmDelete && id && targetUser.role == 0) {
        this.userService.deleteUsers(id).subscribe((data: any) => {
          this.onGetList();
          this.toastr.success('Delete successfully')
        },err =>{
          this.toastr.error(err.error.message)
        })
      }
      else{
        this.toastr.error('Không thể xoá tài khoản này')
      }
      }
      
  }

