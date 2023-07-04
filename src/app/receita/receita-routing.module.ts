import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaAppComponent } from './receita.app.component';
import { ReceitaListComponent } from './receita-list/receita-list.component';
import { ReceitaCreateComponent } from './receita-create/receita-create.component';
import { ReceitaEditComponent } from './receita-edit/receita-edit.component';

const routes: Routes = [
  {
    path: '', component: ReceitaAppComponent,
    children: [
      { path: '', component: ReceitaListComponent },
      {
        path: 'adicionar-novo', component: ReceitaCreateComponent,
      },
      {
        path: 'editar/:id', component: ReceitaEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule { }
