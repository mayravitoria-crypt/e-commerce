//import { Routes } from '@angular/router';
//import { ListaProdutos} from './features/produtos/lista-produtos/lista-produtos'; 
//import { Home } from './features/home/home/home';
//import { Carrinho } from './features/carrinho/carrinho';


//export const routes: Routes = [
//{
//    path: '',
//    component:Home,
//},
// //código logado router
//{
//   //  path:'produtos',
//    //component: ListaProdutos,
//    ///
//

//{
//   path:'produtos',
  // loadComponent: () =>
 //    import ('./features/produtos/lista-produtos/lista-produtos').then(m => m.ListaProdutos)

//},
  //{
  //   path:'carrinho,' 
  //    component: Carrinho,
 // }
//];


//! importações
import { Routes } from "@angular/router";
import { authGuard } from "./core/auth.guard";

export const  routes: Routes =[
    {
        path:'',
        loadComponent: () =>
            import ('./features/home/home/home') .then((m)=> m.Home),
      },
      {
        path:'carrinho',
        canActivate:[authGuard],
        loadComponent:()=>
            import ('./features/carrinho/carrinho').then((m)=>m.Carrinho),
    },
     {
        path:'produtos',
        loadComponent: () =>
            import('./features/produtos/lista-produtos/lista-produtos').then((m)=> m.ListaProdutos),

      },
      {
        path:'**',
        redirectTo: '',
      },
    ];



