import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimonsaysComponent } from './simonsays.component';

const routes: Routes = [{ path: '', component: SimonsaysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimonsaysRoutingModule { }
