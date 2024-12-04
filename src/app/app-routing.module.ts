import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // Ruta predeterminada que redirige a 'login'
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // Página de inicio de sesión
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  // Página de registro
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  // Página de recuperación de contraseña
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then(m => m.RecuperarContrasenaPageModule)
  },
  // Página de inicio (Home) protegida por AuthGuard
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  // Página de solicitud de viaje protegida por AuthGuard
  {
    path: 'solicitar-viaje',
    loadChildren: () => import('./solicitar-viaje/solicitar-viaje.module').then(m => m.SolicitarViajePageModule),
    canActivate: [AuthGuard]
  },
  // Página de agendar viaje protegida por AuthGuard
  {
    path: 'agendar-viaje',
    loadChildren: () => import('./agendar-viaje/agendar-viaje.module').then(m => m.AgendarViajePageModule),
    canActivate: [AuthGuard]
  },
  // Página de viajes realizados protegida por AuthGuard
  {
    path: 'viajes-realizados',
    loadChildren: () => import('./viajes-realizados/viajes-realizados.module').then(m => m.ViajesRealizadosPageModule),
    canActivate: [AuthGuard]
  },
  // Página de perfil protegida por AuthGuard
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  },
  // Página de configuración protegida por AuthGuard
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionPageModule),
    canActivate: [AuthGuard]
  },
  // Página de ayuda protegida por AuthGuard
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then(m => m.AyudaPageModule),
    canActivate: [AuthGuard]
  },
  // Página de imágenes (Imágenes de Viajes)
  {
    path: 'images',
    loadChildren: () => import('./images/images.module').then(m => m.ImagesPageModule),
    canActivate: [AuthGuard] // Puedes proteger esta página si es necesario
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}