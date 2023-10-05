import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notloggedGuard } from './guards/notlogged.guard';
import { checkLoginGuard } from './guards/check-login.guard';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/log/log.module')
      .then((mod) => mod.LogModule),
    canActivate: [notloggedGuard]
  },
  {
    path: 'login', loadChildren: () => import('./modules/log/log.module')
      .then((mod) => mod.LogModule),
    canActivate: [notloggedGuard]
  },
  {
    path: 'app', loadChildren: () => import('./modules/pages/pages.module')
      .then((mod) => mod.PagesModule),
    canActivate: [checkLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
