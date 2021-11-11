import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { PostService } from './Post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CrearComponent,
    ListarComponent,
    EliminarComponent,
    ActualizarComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PostService],
})
export class AppModule {}
