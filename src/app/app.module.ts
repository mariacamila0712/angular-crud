import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { CrearComponent } from './create/create.component';
import { ListarComponent } from './list/list.component';
import { EliminarComponent } from './remove/remove.component';
import { ActualizarComponent } from './upgrade/upgrade.component';
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
