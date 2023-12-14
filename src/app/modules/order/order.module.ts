import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderPageComponent } from './create-order-page/create-order-page.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateOrderPageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        {
            path: 'create',
            component: CreateOrderPageComponent
        }
    ])
  ]
})
export class OrderModule { }
