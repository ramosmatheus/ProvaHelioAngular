import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { ServicoContatoService } from 'src/app/servico/servico-contato.service';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.component.html',
  styleUrls: ['./salvar.component.css']
})
export class SalvarComponent implements OnInit {


  constructor(private contatoService: ServicoContatoService) { }

  ngOnInit() {
  }

}
