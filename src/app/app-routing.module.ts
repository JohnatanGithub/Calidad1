import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent }    from  './empleados/empleado/empleado.component';
import { EmpresaComponent }     from  './empresas/empresa/empresa.component';
import { LoginComponent }       from  './login/login/login.component';
import { PROVEEDORComponent } from './proveedor/proveedor.component';


 
const routes: Routes = [  
  
  {
    path: 'empleado',
  component: EmpleadoComponent
  }
  ,
 
  {
    path: 'empresa',
  component: EmpresaComponent
  }
  ,
  {
    path: 'app',
  component: LoginComponent
  }
,
{
  path: 'PROVEEDOR',
component: PROVEEDORComponent
}
,

  { path: '**', redirectTo: 'PROVEEDOR' }
  
  ,
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

