import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  user :any
  constructor(private router:Router,
              private toastr : ToastrService
    ) { 
    this.user = JSON.parse(localStorage.getItem('loggedInUser') as string)
  }

  ngOnInit(): void {
  
  }
  onLogOut() {
    localStorage.removeItem('loggedInUser')
    this.toastr.success('','Đăng xuất thành công @@',{
      timeOut : 1000
    })
    this.router.navigateByUrl('/sign-in')
  }
}
