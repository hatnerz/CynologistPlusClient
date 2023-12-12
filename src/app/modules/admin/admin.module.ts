import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBaseComponent } from './data-base/data-base.component';
import { ManagersControlComponent } from './managers-control/managers-control.component';
import { TrainingCentersControlComponent } from './training-centers-control/training-centers-control.component';



@NgModule({
  declarations: [
    DataBaseComponent,
    ManagersControlComponent,
    TrainingCentersControlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
