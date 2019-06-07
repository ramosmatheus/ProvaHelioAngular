import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Contato } from '../contato/entidade/contato';

@Injectable({
  providedIn: 'root'
})
export class ServicoContatoService {

  contato: Contato = new Contato();

  constructor(private base: AngularFireDatabase) { }


  salvar(){
    this.base.list('contato').push(this.contato);
    this.contato = new Contato();
  }



}
