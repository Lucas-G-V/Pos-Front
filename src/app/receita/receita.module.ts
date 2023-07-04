import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { ReceitaRoutingModule } from './receita-routing.module';
import { ReceitaEditComponent } from './receita-edit/receita-edit.component';
import { ReceitaListComponent } from './receita-list/receita-list.component';
import { ReceitaCreateComponent } from './receita-create/receita-create.component';
import { ReceitaService } from './services/receita.service';
import { ReceitaAppComponent } from './receita.app.component';



@NgModule({
  declarations: [
    ReceitaEditComponent,
    ReceitaListComponent,
    ReceitaCreateComponent,
    ReceitaAppComponent
  ],
  imports: [
    CommonModule,
    ReceitaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ReceitaService
  ]
})
export class ReceitaModule { }
