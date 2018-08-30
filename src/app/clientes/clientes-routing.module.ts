import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesInfoComponent } from './clientes-info/clientes-info.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
