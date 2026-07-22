import { Routes } from '@angular/router';
import { ListaProdutos} from './features/produtos/lista-produtos/lista-produtos'; 
import { Home } from './features/home/home/home';
import { Carrinho } from './features/carrinho/carrinho';


export const routes: Routes = [
{
    path: '',
    component:Home,
},
{
    path:'produtos',
    component: ListaProdutos,
},

{
   path:'Carrinho',
   componet: Carrinho,

},

];


