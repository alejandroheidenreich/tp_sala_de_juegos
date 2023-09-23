import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HigerorlowerComponent } from './higerorlower.component';

const routes: Routes = [{ path: '', component: HigerorlowerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HigerorlowerRoutingModule { }
