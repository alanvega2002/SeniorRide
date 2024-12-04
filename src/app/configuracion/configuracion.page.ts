import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage {
  selectedLanguage: string;

  constructor(private translate: TranslateService) {
    // Carga el idioma guardado en localStorage o usa 'es' por defecto
    this.selectedLanguage = localStorage.getItem('language') || 'es';
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }

  cambiarIdioma(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
    localStorage.setItem('language', language); // Guarda el idioma seleccionado
  }
}
