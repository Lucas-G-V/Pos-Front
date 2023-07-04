import { Component, OnInit } from '@angular/core';
import { Receita } from '../models/receita';
import { ReceitaService } from '../services/receita.service';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit {

  public receitas: any[];
  errorMessage: string;

  constructor(private receitaService: ReceitaService) { }

  ngOnInit(): void {
    this.receitaService.obterTodos()
      .subscribe(
        receitas => {
          this.receitas = receitas;
        }
          ,
        error => this.errorMessage);
      
  }

  deleteReceita(id :string){
    this.receitaService.deleteById(id)
    .subscribe(
      success => {
        this.receitas = this.receitas.filter(receita => receita.receitaId !== id);
      },
      error => this.errorMessage
    );
  }
}
