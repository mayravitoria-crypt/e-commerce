import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component,Input, Output,EventEmitter } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto{
 
  //Entrada de dado de lista-produto.ts
  @Input() nome: string = '';
  @Input() preco: number = 0;

  //Saida de dados de produtos selecionados para a lista-produtos.ts
  @Output() produtoSelecionado = new EventEmitter<string>();

  selecionarProduto() { 
    this.produtoSelecionado.emit(this.nome)
  }
}

