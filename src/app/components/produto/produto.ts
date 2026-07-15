import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component,Input, Output } from '@angular/core';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, CurrencyPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto{
  @Input() nome: string = '';
  @Input() preco: number = 0;
}

