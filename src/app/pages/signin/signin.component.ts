import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  onSubmit() {
    const submitData = this.loginForm.value;
    this.authService.signin(submitData).subscribe(data => {
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      // 2. Điều hướng quay về admin
      this.router.navigateByUrl('');
      this.toastr.success('','Đăng nhập thành công !',{
        timeOut: 1000
      })
    }
    );
  }
}
