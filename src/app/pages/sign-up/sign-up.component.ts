import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm : FormGroup;
  constructor(  private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {
      this.signUpForm = new FormGroup({
        name : new FormControl(''),
        email : new FormControl(''),
        password : new FormControl(''),
        address : new FormControl('')
      })
     }

  ngOnInit(): void {
    
  }
  onRegister() {
    const submitData = this.signUpForm.value;
    this.authService.signup(submitData).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('sign-in');
      this.toastr.success('','Đăng ký thành công !',{
        timeOut: 1000
      })
    },err =>{
      this.toastr.error(err.error.message)
      
    }
    );
  }
}
