import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContactosComponent } from './lista-contactos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaContactosComponent
    
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaContactosRoutingModule { }
