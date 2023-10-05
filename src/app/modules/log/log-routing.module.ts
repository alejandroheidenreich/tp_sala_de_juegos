import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log.component';
import { notloggedGuard } from 'src/app/guards/notlogged.guard';

const routes: Routes = [
  {
    path: '', component: LogComponent,
    children: [{
      path: '', loadChildren: () => import('./login/login.module')
        .then(mod => mod.LoginModule)
    },
    {
      path: 'login', loadChildren: () => import('./login/login.module')
        .then(mod => mod.LoginModule),
      canActivate: [notloggedGuard]
    },
    {
      path: 'register', loadChildren: () => import('./register/register.module')
        .then(mod => mod.RegisterModule),
      canActivate: [notloggedGuard]
    }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
