import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { FormBaseComponent } from 'src/app/utils/form-base.component';
import { Receita } from '../models/receita';
import { ReceitaService } from '../services/receita.service';

@Component({
  selector: 'app-receita-create',
  templateUrl: './receita-create.component.html',
  styleUrls: ['./receita-create.component.css']
})
export class ReceitaCreateComponent extends FormBaseComponent 
implements OnInit, AfterViewInit{
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
    errors: any[] = [];
    receitaForm: FormGroup;
    receita = new Receita();
    selectedImage: File;


    constructor(private receitaService : ReceitaService, private fb: FormBuilder, 
        private toastr: ToastrService, 
        private router: Router,
        private route: ActivatedRoute) {
            super();
            this.validationMessages = {
            descricao: {
                required: 'Informe a Descrição',
                minlength: 'Mínimo de 2 caracteres',
                maxlength: 'Máximo de 200 caracteres'
            },
            preco: {
              required: 'Informe o Preço',
              min: 'Informe um valor positivo',
            },
            imagem: {
              required: 'Informe a Imagem',
            },
            }
            super.configurarMensagensValidacaoBase(this.validationMessages);
    }
    
    protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
      super.configurarValidacaoFormularioBase(formInputElements, this.receitaForm);
    }

    ngOnInit(): void {
        this.receitaForm = this.fb.group({
            descricao: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
            preco: ['', [Validators.required, Validators.min(0)]],
            imagem: ['', [Validators.required]],
          });
    }
    ngAfterViewInit(): void {
      this.configurarValidacaoFormulario(this.formInputElements);
    }

    async adicionarEstrutura() {
      if (this.receitaForm.dirty && this.receitaForm.valid) {
        const imagem = this.selectedImage;
        this.receita= Object.assign({}, this.receita, this.receitaForm.value);
        this.receitaService.postReceita(imagem, this.receita).subscribe(
          response => {
            this.processarSucesso(response);
          },
          error => {
            console.error('Ocorreu um erro durante o upload:', error);
          }
        );
      }
    }

    processarSucesso(response: any) {
      this.receitaForm.reset();
      this.errors = [];
  
      this.mudancasNaoSalvas = false;
      let toast = this.toastr.success('Estrutura cadastrada com sucesso!', 'Sucesso!');
      if (toast) {
        toast.onHidden.subscribe(() => {
          this.router.navigate([`/receita`]);
        });
    }
    }
  
    processarFalha(fail: any) {
      this.errors = fail.error.errors;
      this.toastr.error('Ocorreu um erro!', 'Opa :(');
    }

    onImagemSelected(event: any) {
      const file = event.target.files[0];
      this.selectedImage = file;
    }
}
