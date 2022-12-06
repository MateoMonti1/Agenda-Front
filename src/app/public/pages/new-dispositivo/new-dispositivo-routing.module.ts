import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDispositivoComponent } from './new-dispositivo.component';

const routes: Routes = [
  {
    path:'',
    component: NewDispositivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDispositivoRoutingModule { }
