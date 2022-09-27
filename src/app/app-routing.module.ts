import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule)

    },
    {
      path:"lista-contactos",
      loadChildren: () => import('./public/pages/lista-contactos/lista-contactos.module').then(m => m.ListaContactosModule)
  
      },
      {
        path:"contactos",
        loadChildren: () => import('./public/pages/contact/contact.module').then(m => m.ContactModule)
    
        },
        {
          path:"new",
          loadChildren: () => import('./public/pages/new-contacts/new-contacts.module').then(m => m.NewContactsModule)
      
          },
          {
            path:"delete",
            loadChildren: () => import('./public/pages/delete-contacts/delete-contacts.module').then(m => m.DeleteContactsModule)
        
            },
            {
              path:"ok-delete",
              loadChildren: () => import('./public/pages/ok-delete-contacts/ok-delete-contacts.module').then(m => m.OkDeleteContactsModule)
          
              },
              

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
