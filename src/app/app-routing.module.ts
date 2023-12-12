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
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
