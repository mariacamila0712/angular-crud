import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './upgrade/upgrade.component';
import { CrearComponent } from './create/create.component';
import { EliminarComponent } from './remove/remove.component';
import { ListarComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'crear',
    component: CrearComponent,
  },
  {
    path: 'listar',
    component: ListarComponent,
  },
  {
    path: 'actualizar',
    component: ActualizarComponent,
  },
  {
    path: 'eliminar',
    component: EliminarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
