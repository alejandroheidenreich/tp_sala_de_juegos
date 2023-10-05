import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { checkLoginGuard } from 'src/app/guards/check-login.guard';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    //canActivateChild: [checkLoginGuard],
    children: [
      {
        path: '', loadChildren: () => import('./home/home.module')
          .then(mod => mod.HomeModule)
      },
      {
        path: 'home', loadChildren: () => import('./home/home.module')
          .then(mod => mod.HomeModule)
      },
      {
        path: 'about', loadChildren: () => import('./about/about.module')
          .then(mod => mod.AboutModule)
      },
      {
        path: 'chat', loadChildren: () => import('./chat/chat.module')
          .then(mod => mod.ChatModule)
      },
      {
        path: 'games', loadChildren: () => import('./games/games.module')
          .then(mod => mod.GamesModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
