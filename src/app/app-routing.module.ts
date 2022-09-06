import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '', pathMatch: 'full' //Para el home
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full' //Para el 404
  }/*,
  {
    path: '404-not-found',
    loadChildren: ()=> import('@public/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
