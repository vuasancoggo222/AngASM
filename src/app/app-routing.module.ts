import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './guards/can-access-admin-guard.guard';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product-list/admin-product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryProductComponent } from './pages/category-product/category-product.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/signin/signin.component';
const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'product-detail/:id',
        component: ProductDetailComponent
      },
      {
        path: 'category/:id',
        component: CategoryProductComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutsComponent,
    canActivate: [CanAccessAdminGuard],
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent
          },
          {
            path: 'create',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminProductFormComponent
          },
          {
            path: ':id',
            component: AdminProductDetailComponent
          },
        ]
      }
    ]
  },
  {
    path: 'sign-in',
    component : SignInComponent,
  },
  {
    path: 'sign-up',
    component : SignUpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard]
})
export class AppRoutingModule { }
