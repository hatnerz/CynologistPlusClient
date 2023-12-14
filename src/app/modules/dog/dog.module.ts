import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDogPageComponent } from './add-dog-page/add-dog-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DogListPageComponent } from './dog-list-page/dog-list-page.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogPageComponent } from './dog-page/dog-page.component';



@NgModule({
  declarations: [
    AddDogPageComponent,
    DogListPageComponent,
    DogListComponent,
    DogPageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild([
        {
            path: 'add',
            component: AddDogPageComponent
        },
        {
            path: 'list',
            component: DogListPageComponent
        },
        {
            path: 'dog/:id',
            component: DogPageComponent
        }
    ])
  ]
})
export class DogModule { }
