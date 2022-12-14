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
        path:"contacto/:id",
        loadChildren: () => import('./public/pages/contact/contact.module').then(m => m.ContactModule)
    
        },
        {
          path:"new",
          loadChildren: () => import('./public/pages/new-contacts/new-contacts.module').then(m => m.NewContactsModule)
      
          },
            {
              path:"sign-in",
              loadChildren: () => import('./public/pages/sign-in/sign-in.module').then(m => m.SignInModule)
          
              },
              {
                path:"edit-contact",
                loadChildren: () => import('./public/pages/edit-contact/edit-contact.module').then(m => m.EditContactModule)
            
                },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
