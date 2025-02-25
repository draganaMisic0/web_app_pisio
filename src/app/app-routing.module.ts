import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './modules/map/map.component';

const routes: Routes = [
  {
    path: '',
    //redirectTo: 'auth/sign-in', 
    //pathMatch: 'full',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    
  },
  //{ path: 'map', component: MapComponent, pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'errors',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  { path: '**', redirectTo: 'errors/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
