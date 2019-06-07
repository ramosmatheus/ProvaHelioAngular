import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampoTesteComponent } from './campos/campo-teste/campo-teste.component';

import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { SalvarComponent } from './contato/salvar/salvar.component';
import { ServicoContatoService } from './servico/servico-contato.service';

@NgModule({
  declarations: [
    AppComponent,
    CampoTesteComponent,
    SalvarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [ServicoContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
