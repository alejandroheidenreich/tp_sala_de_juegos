import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log.component';

const routes: Routes = [  
  { path: '', component: LogComponent,
    children: [{
        path: '', loadChildren: () => import('./login/login.module')
        .then(mod => mod.LoginModule)
      },
      {
        path: 'login', loadChildren: () => import('./login/login.module')
        .then(mod => mod.LoginModule)
      },
      {
        path: 'register', loadChildren: () => import('./register/register.module')
        .then(mod => mod.RegisterModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
