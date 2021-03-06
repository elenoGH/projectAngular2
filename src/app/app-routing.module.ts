import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/listar/usuarios.component';
import { DashboardComponent } from './usuarios/dashboard/dashboard.component';
import { UsuarioDetalleComponent } from './usuarios/usuario-detalle/usuario-detalle.component';

//residente


//Condominios
import { CondominiosComponent } from './condominios/condominios.component';
//viviendasService
import { ViviendasComponent } from './viviendas/viviendas.component';
//residente
import { ListarRecComponent } from './residentes/listar/listar.component';
//conciliaciones
import { ListarConcComponent } from './conciliaciones/listar/listar.component';
//codigos postales de mexico
import { CpmlistarComponent } from './cpmex/cpmlistar/cpmlistar.component';

//para poder importar estos componentes, es necesario generar un index dentro de la carpeta de
//donde se requiere importar estos mismos
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalle/:id', component: UsuarioDetalleComponent },
  //residente
  { path: 'residente/listar', component: ListarRecComponent },
  //conciliaciones
  { path: 'conciliaciones/listar', component: ListarConcComponent },
  //{ path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //condominios
  { path: 'condominios', component: CondominiosComponent },
  //viviendasService
  { path: 'viviendas', component: ViviendasComponent },
  //codigos postales de mexico
  { path: 'cpmex/cpmlistar', component: CpmlistarComponent },

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes);
