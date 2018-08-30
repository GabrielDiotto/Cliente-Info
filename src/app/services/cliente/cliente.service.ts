import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import Cliente from '../../model/cliente';

const baseUrl = environment.endPointAPI;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  endPointFuncionario = 'cliente';
  constructor(private http: HttpClient) { }

  getClientes (): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(baseUrl + '/' + this.endPointFuncionario);
  }
}
