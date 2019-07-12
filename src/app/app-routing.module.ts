import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent }      from './usuarios/usuarios.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalle/:id', component: UsuarioDetalleComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
