import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBaseComponent } from './data-base/data-base.component';
import { ManagersControlComponent } from './managers-control/managers-control.component';
import { TrainingCentersControlComponent } from './training-centers-control/training-centers-control.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    DataBaseComponent,
    ManagersControlComponent,
    TrainingCentersControlComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TranslateModule,
    RouterModule.forChild([
        {
            path: 'database',
            component: DataBaseComponent
        },
        {
            path: 'managers',
            component: ManagersControlComponent,
        },
        {
            path: 'training-centers',
            component: TrainingCentersControlComponent
        }
    ])
  ]
})
export class AdminModule { }
