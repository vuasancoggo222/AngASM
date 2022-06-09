import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './user/user.component';
import { AdminProductListComponent } from './pages/admin/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product-detail/admin-product-detail.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderClientComponent } from './components/header-client/header-client.component';
import { NavigationClientComponent } from './components/navigation-client/navigation-client.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './pages/signin/signin.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ClientSidebarComponent } from './components/client-sidebar/client-sidebar.component';
import 'flowbite';
import { ProductCardComponent } from './components/product-card/product-card.component'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CategoryProductComponent } from './pages/category-product/category-product.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    AdminLayoutsComponent,
    HomeComponent,
    UserComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    AdminProductDetailComponent,
    HeaderClientComponent,
    NavigationClientComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    ClientSidebarComponent,
    ProductCardComponent,
    ProductDetailComponent,
    SkeletonLoaderComponent,
    LoadingComponent,
    CategoryProductComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // FormsModule được sử dụng ở các component đã có bên trên
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
