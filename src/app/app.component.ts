import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private localStorageService: LocalStorageService, // Inyecta el servicio de almacenamiento
    private router: Router // Inyecta el servicio de enrutador para redirección
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // Configura el idioma predeterminado como español
    this.translate.setDefaultLang('es');

    // Obtiene el idioma guardado usando LocalStorageService o usa español como predeterminado
    const savedLanguage = this.localStorageService.getItem('language') || 'es';
    this.translate.use(savedLanguage);

    // Configura el usuario predeterminado en localStorage si no existe
    const defaultUser = { username: 'admin', password: 'admin' };
    if (!this.localStorageService.getItem('user')) {
      this.localStorageService.setItem('user', defaultUser);
    }

    // Verifica si el usuario ya está logueado
    const isLoggedIn = this.localStorageService.getItem('userToken');
    if (isLoggedIn) {
      this.router.navigate(['/home']); // Redirige al usuario a la página de inicio si está logueado
    }
  }

  // Cambia el idioma dinámicamente y lo guarda usando LocalStorageService
  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
    this.localStorageService.setItem('language', idioma); // Guarda el idioma seleccionado
  }
}
