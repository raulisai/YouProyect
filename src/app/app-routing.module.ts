import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './Components/log-in/log-in.component'
import { PerfilUserComponent } from './Components/miPerfil/perfil-user/perfil-user.component'
import { VerProyectosComponent } from './Components/ver-proyectos/ver-proyectos.component'



const routes: Routes = [
{path: 'LogIn', component:LogInComponent},
{path: '',pathMatch: 'full', redirectTo:'LogIn'},
{path: 'miPerfil',component:PerfilUserComponent},
{path: 'PublicacionesProyectos', component:VerProyectosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 