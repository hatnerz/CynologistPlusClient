import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild([
        {
            path: '', pathMatch: 'full',
            component: ProfilePageComponent
        }
    ])
  ]
})
export class ProfileModule { }
