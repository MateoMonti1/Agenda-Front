import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDispositivoComponent } from './view-dispositivo.component';

const routes: Routes = [
  {
    path:'',
    component:ViewDispositivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDispositivoRoutingModule { }
