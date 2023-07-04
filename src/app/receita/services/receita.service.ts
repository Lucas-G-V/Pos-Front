import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError,  Observable, from } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { Receita } from "../models/receita";
import { BaseService } from "src/app/utils/base-service";


@Injectable()
export class ReceitaService extends BaseService {
    constructor(private http: HttpClient) {super()}

    public postReceita(imagem: File, receita : Receita): Observable<any> {
      const formData = new FormData();
      formData.append('Imagens', imagem, imagem.name);
      formData.append('Descricao', receita.descricao);
      formData.append('Preco', receita.preco.toString());
      formData.append('UrlImagem', 'aa');
      const path = this.UrlApi + 'Receitas';
      return this.http.post(path, formData).pipe(
        tap(response => {
        })
      );
    }

    public putReceita(imagem: File, receita : Receita): Observable<any> {
      const formData = new FormData();
      if (imagem) {
        formData.append('Imagens', imagem, imagem.name);
      }
      formData.append('Descricao', receita.descricao);
      formData.append('ReceitaId', receita.receitaId);
      formData.append('Preco', receita.preco.toString());
      formData.append('UrlImagem', 'aa');
      const path = this.UrlApi + 'Receitas';
      return this.http.put(path+'/'+receita.receitaId, formData).pipe(
        tap(response => {
        })
      );
    }


    obterTodos(): Observable<Receita[]> {
      return this.http
          .get<Receita[]>(this.UrlApi + "Receitas/GetAll")
          .pipe(catchError(super.serviceError));
  }
  getById(id : string): Observable<Receita> {
    return this.http
        .get<Receita>(this.UrlApi + "Receitas/" + id)
        .pipe(catchError(super.serviceError));
  }

  deleteById(id : string): Observable<any>{
    return this.http
        .delete<any>(this.UrlApi + "Receitas/" + id)
        .pipe(catchError(super.serviceError));
  }
}
