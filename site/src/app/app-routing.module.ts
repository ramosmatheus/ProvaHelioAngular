import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalvarComponent } from './contato/salvar/salvar.component';

const routes: Routes = [
  {path: 'salvarContato', component: SalvarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
