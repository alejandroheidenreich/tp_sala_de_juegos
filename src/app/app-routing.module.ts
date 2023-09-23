import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// # 
const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/log/log.module')
  .then((mod) => mod.LogModule) },
  // { path: 'login', loadChildren: () => import('./modules/log/log.module')
  // .then((mod) => mod.LogModule),
  // },
  { path: 'login', loadChildren: () => import('./modules/log/log.module')
  .then((mod) => mod.LogModule) },
  { path: 'app', loadChildren: () => import('./modules/pages/pages.module')
  .then((mod) => mod.PagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
