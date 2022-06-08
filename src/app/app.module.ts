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
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ClientSidebarComponent } from './components/client-sidebar/client-sidebar.component';
import 'flowbite';
import { ProductCardComponent } from './components/product-card/product-card.component'
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
    ProductsPageComponent,
    ClientSidebarComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // FormsModule được sử dụng ở các component đã có bên trên
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
