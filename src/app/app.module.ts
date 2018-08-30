import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClienteService } from './services/cliente/cliente.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [
    { provide: ClienteService, useClass: ClienteService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
