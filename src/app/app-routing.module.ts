import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'receita',
    pathMatch: 'full'
  },
  {
    path: 'receita',
    loadChildren: () => import('./receita/receita.module')
      .then(m => m.ReceitaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
