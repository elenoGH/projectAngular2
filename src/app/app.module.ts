import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/listar/usuarios.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioDetalleComponent } from './usuarios/usuario-detalle/usuario-detalle.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './usuarios/dashboard/dashboard.component'; // <-- NgModel lives here

//servicios REST
import { HttpClientModule }    from '@angular/common/http';

//bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { CondominiosComponent } from './condominios/condominios.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ViviendasComponent } from './viviendas/viviendas.component';

import { ListarRecComponent } from './residentes/listar/listar.component';
import { ListarConcComponent } from './conciliaciones/listar/listar.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioDetalleComponent,
    MessagesComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CondominiosComponent,
    ViviendasComponent,

    ListarRecComponent,
    ListarConcComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
