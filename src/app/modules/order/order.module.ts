import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderPageComponent } from './create-order-page/create-order-page.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea'
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ClientOrdersPageComponent } from './client-orders-page/client-orders-page.component';
import { TrainingCenterOrdersPageComponent } from './training-center-orders-page/training-center-orders-page.component';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [
    CreateOrderPageComponent,
    ClientOrdersPageComponent,
    TrainingCenterOrdersPageComponent,
    OrderListComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild([
        {
            path: 'create/:id',
            component: CreateOrderPageComponent
        },
        {
            path: 'client-list',
            component: ClientOrdersPageComponent
        },
        {
            path: 'training-center-list',
            component: TrainingCenterOrdersPageComponent
        }
    ])
  ]
})
export class OrderModule { 

}
