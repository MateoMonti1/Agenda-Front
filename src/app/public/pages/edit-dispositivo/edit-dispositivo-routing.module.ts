import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDispositivoComponent } from './edit-dispositivo.component';

const routes: Routes = [
  {
    path:'',
    component: EditDispositivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDispositivoRoutingModule { }
