import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCenterSearchPageComponent } from './training-center-search-page/training-center-search-page.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TrainingCenterListElementComponent } from './training-center-list-element/training-center-list-element.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    TrainingCenterSearchPageComponent,
    TrainingCenterListElementComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        {
            path: '', pathMatch: 'full',
            redirectTo: 'list'
        },
        {
            path: 'list',
            component: TrainingCenterSearchPageComponent
        }
    ])
  ]
})
export class TrainingCenterModule { }
