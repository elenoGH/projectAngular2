import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { FormsModule } from '@angular/forms';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioDetalleComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
