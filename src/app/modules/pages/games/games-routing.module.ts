import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '', component : GamesComponent,
  },
  {
    path: 'higherorlower', loadChildren: () => import ('./higerorlower/higerorlower.module')
      .then(mod => mod.HigerorlowerModule)
  },
  {
    path: 'ahorcado', loadChildren: () => import ('./ahorcado/ahorcado.module')
      .then(mod => mod.AhorcadoModule)
  },
  {
    path: 'preguntados', loadChildren: () => import ('./preguntados/preguntados.module')
      .then(mod => mod.PreguntadosModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
