import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteContactsComponent } from './delete-contacts.component';

const routes: Routes = [
  {
    path: '',
    component: DeleteContactsComponent
    
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteContactsRoutingModule { }
