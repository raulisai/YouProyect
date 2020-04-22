import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from 'src/app/Components/log-in/log-in.component';
import { PerfilUserComponent } from './Components/miPerfil/perfil-user/perfil-user.component';
import { PublicacionesComponent } from './Components/publicaciones/publicaciones.component';
import { VerProyectosComponent } from './Components/ver-proyectos/ver-proyectos.component';
import { BannerComponent } from './Components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    PerfilUserComponent,
    PublicacionesComponent,
    VerProyectosComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
