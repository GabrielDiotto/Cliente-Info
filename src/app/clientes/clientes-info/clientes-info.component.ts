import { Component, OnInit } from '@angular/core';
import Cliente from '../../model/cliente';
import { ClienteService } from '../../services/cliente/cliente.service';

@Component({
  selector: 'app-clientes-info',
  templateUrl: './clientes-info.component.html',
  styleUrls: ['./clientes-info.component.scss']
})
export class ClientesInfoComponent implements OnInit {
  clientes: Cliente[];
  constructor(private clienteService : ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getClientes()
        .subscribe(clientes => {
          this.clientes = clientes
          console.log(this.clientes)
        })
  }

}
