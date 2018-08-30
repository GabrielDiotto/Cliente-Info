import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatDividerModule} from '@angular/material';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesInfoComponent } from './clientes-info/clientes-info.component';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  declarations: [ClientesInfoComponent]
})
export class ClientesModule { }
