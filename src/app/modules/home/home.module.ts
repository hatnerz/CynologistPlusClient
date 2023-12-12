import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    TranslateModule,
    CommonModule,
    RouterModule.forChild([
        {
            path: '', pathMatch: 'full',
            component: HomePageComponent
        }
    ])
  ]
})
export class HomeModule { }
