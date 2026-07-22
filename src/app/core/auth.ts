import { signal } from "@angular/core";

//! Define o valor inicial do signal
export const usuarioLogado = signal (false);


//! Define Signal usuatioLogado como (true), Permite acesso as rotas
export function login(){
    usuarioLogado.set(true);
}
//! Define Signal usuarioLogado como (false), bloqueia acesso imediatamente
export function logout(){
    usuarioLogado.set(false);      
}