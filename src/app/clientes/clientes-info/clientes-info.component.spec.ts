import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesInfoComponent } from './clientes-info.component';

describe('ClientesInfoComponent', () => {
  let component: ClientesInfoComponent;
  let fixture: ComponentFixture<ClientesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
