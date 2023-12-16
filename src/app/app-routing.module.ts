import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './pages/skeleton/skeleton.component';

const routes: Routes = [
    {
        path: '',
        component: SkeletonComponent,
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
            },
            {
                path: 'sign',
                loadChildren: () => import('./modules/sign-in-up/sign-in-up.module').then((m) => m.SignInUpModule)
            },
            {
                path: 'admin',
                loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('./modules/settings/settings.module').then((m) => m.SettingsModule)
            },
            {
                path: 'training-centers',
                loadChildren: () => import('./modules/training-center/training-center.module').then(m => m.TrainingCenterModule)
            },
            {
                path: 'order',
                loadChildren: () => import('./modules/order/order.module').then((m) => m.OrderModule)
            },
            {
                path: 'dog',
                loadChildren: () => import('./modules/dog/dog.module').then((m) => m.DogModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
