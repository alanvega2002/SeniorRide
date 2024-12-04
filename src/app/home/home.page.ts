import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  menuOptions = [
    {
      title: 'MENU_PROFILE',
      icon: 'person-outline',
      route: '/perfil',
      description: 'MENU_PROFILE_DESCRIPTION'
    },
    {
      title: 'MENU_HISTORY',
      icon: 'time-outline',
      route: '/viajes-realizados',
      description: 'MENU_HISTORY_DESCRIPTION'
    },
    {
      title: 'MENU_REQUEST_RIDE',
      icon: 'car-outline',
      route: '/solicitar-viaje',
      description: 'MENU_REQUEST_RIDE_DESCRIPTION'
    },
    {
      title: 'MENU_SETTINGS',
      icon: 'settings-outline',
      route: '/configuracion',
      description: 'MENU_SETTINGS_DESCRIPTION'
    }
    // Puedes añadir más opciones de menú aquí
  ];

  constructor(
    private router: Router,
    private translate: TranslateService,
    private localStorageService: LocalStorageService // Inyectamos LocalStorageService
  ) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }

  // Método para cerrar sesión
  logout() {
    // Borra el token de usuario o datos de sesión de localStorage
    this.localStorageService.removeItem('userToken');

    // Redirige al usuario a la página de login
    this.router.navigate(['/login']);
  }
}
