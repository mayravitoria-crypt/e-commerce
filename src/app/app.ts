import { Component, signal } from '@angular/core';
  //!import { RouterOutlet } from '@angular/router';// Remove importação do RouterOutlet,pois não esta sendo utilizado no momento//
import { Produto } from './components/produto/produto'; //Importa  o componente 
import { ListaProdutos } from './components/lista-produtos/lista-produtos';
@Component({
  selector: 'app-root',
  imports: [ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
